const WEATHER_CODES = {
  0: "Açık",
  1: "Çoğunlukla açık",
  2: "Parçalı bulutlu",
  3: "Kapalı",
  45: "Sisli",
  48: "Kırağılı sis",
  51: "Hafif çise",
  53: "Orta şiddette çise",
  55: "Yoğun çise",
  56: "Dondurucu çise",
  57: "Yoğun dondurucu çise",
  61: "Hafif yağmur",
  63: "Orta şiddette yağmur",
  65: "Şiddetli yağmur",
  66: "Dondurucu yağmur",
  67: "Şiddetli dondurucu yağmur",
  71: "Hafif kar",
  73: "Orta şiddette kar",
  75: "Yoğun kar",
  77: "Kar taneleri",
  80: "Hafif sağanak",
  81: "Orta şiddette sağanak",
  82: "Şiddetli sağanak",
  85: "Hafif kar sağanağı",
  86: "Yoğun kar sağanağı",
  95: "Gök gürültülü fırtına",
  96: "Dolu ile fırtına",
  99: "Şiddetli dolu ile fırtına"
};

class WeatherData {
  constructor(cityName, country, latitude, longitude, current, hourly) {
    this.cityName = cityName;
    this.country = country;
    this.latitude = latitude;
    this.longitude = longitude;
    this.temperature = current.temperature;
    this.windspeed = current.windspeed;
    this.winddirection = current.winddirection;
    this.weathercode = current.weathercode;
    this.time = current.time;
    this.hourlyTimes = hourly.time;
    this.hourlyTemps = hourly.temperature_2m;
  }

  getConditionText() {
    return WEATHER_CODES[this.weathercode] || "Bilinmiyor";
  }

  getWindDirectionText() {
    const directions = ["Kuzey", "Kuzeydoğu", "Doğu", "Güneydoğu", "Güney", "Güneybatı", "Batı", "Kuzeybatı"];
    const index = Math.round(this.winddirection / 45) % 8;
    return directions[index];
  }

  getFormattedTime() {
    const parts = this.time.split("T");
    const dateParts = parts[0].split("-");
    return dateParts[2] + "." + dateParts[1] + "." + dateParts[0] + " " + parts[1];
  }

  getNextHours(count) {
    const currentHour = this.time.slice(0, 13);
    let startIndex = this.hourlyTimes.findIndex(function (t) {
      return t.slice(0, 13) >= currentHour;
    });
    if (startIndex === -1) {
      startIndex = 0;
    }
    const labels = [];
    const temps = [];
    for (let i = startIndex; i < startIndex + count && i < this.hourlyTimes.length; i++) {
      labels.push(this.hourlyTimes[i].split("T")[1]);
      temps.push(this.hourlyTemps[i]);
    }
    return { labels: labels, temps: temps };
  }
}

class WeatherService {
  static GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
  static FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

  static async fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("HTTP_" + response.status);
    }
    return response.json();
  }

  static async getCoordinates(city) {
    const url = WeatherService.GEO_URL + "?name=" + encodeURIComponent(city) + "&count=1&language=tr&format=json";
    const data = await WeatherService.fetchJson(url);
    if (!data.results || data.results.length === 0) {
      throw new Error("CITY_NOT_FOUND");
    }
    return data.results[0];
  }

  static async getWeather(city) {
    const place = await WeatherService.getCoordinates(city);
    const url = WeatherService.FORECAST_URL +
      "?latitude=" + place.latitude +
      "&longitude=" + place.longitude +
      "&current_weather=true&hourly=temperature_2m&timezone=auto";
    const data = await WeatherService.fetchJson(url);
    if (!data.current_weather || !data.hourly) {
      throw new Error("NO_WEATHER_DATA");
    }
    return new WeatherData(
      place.name,
      place.country || "",
      place.latitude,
      place.longitude,
      data.current_weather,
      data.hourly
    );
  }
}

class AppUI {
  static STORAGE_KEY = "weatherPortalFavorites";

  constructor() {
    this.input = document.getElementById("city-input");
    this.searchBtn = document.getElementById("search-btn");
    this.loading = document.getElementById("loading");
    this.errorBox = document.getElementById("error");
    this.resultCard = document.getElementById("result-card");
    this.cityName = document.getElementById("city-name");
    this.cityMeta = document.getElementById("city-meta");
    this.temperature = document.getElementById("temperature");
    this.condition = document.getElementById("condition");
    this.wind = document.getElementById("wind");
    this.windDir = document.getElementById("wind-dir");
    this.obsTime = document.getElementById("obs-time");
    this.favBtn = document.getElementById("fav-btn");
    this.canvas = document.getElementById("temp-chart");
    this.favList = document.getElementById("fav-list");
    this.favEmpty = document.getElementById("fav-empty");

    this.currentData = null;
    this.favorites = this.loadFavorites();

    this.bindEvents();
    this.renderFavorites();
  }

  bindEvents() {
    this.searchBtn.addEventListener("click", () => this.handleSearch());
    this.input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.handleSearch();
      }
    });
    this.favBtn.addEventListener("click", () => this.toggleFavorite());
    window.addEventListener("resize", () => {
      if (this.currentData) {
        this.drawChart(this.currentData);
      }
    });
  }

  loadFavorites() {
    try {
      const raw = localStorage.getItem(AppUI.STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem(AppUI.STORAGE_KEY, JSON.stringify(this.favorites));
    } catch (error) {
      this.showError("Favoriler tarayıcı hafızasına kaydedilemedi.");
    }
  }

  async handleSearch(cityOverride) {
    const city = (cityOverride || this.input.value).trim();
    if (!city) {
      this.showError("Lütfen bir şehir adı girin.");
      return;
    }
    this.input.value = city;
    this.setLoading(true);
    this.hideError();
    this.resultCard.classList.add("hidden");

    try {
      const data = await WeatherService.getWeather(city);
      this.currentData = data;
      this.renderResult(data);
    } catch (error) {
      this.showError(this.getErrorMessage(error));
    } finally {
      this.setLoading(false);
    }
  }

  getErrorMessage(error) {
    if (error.message === "CITY_NOT_FOUND") {
      return "Şehir bulunamadı. Lütfen yazımı kontrol edip tekrar deneyin.";
    }
    if (error.message === "NO_WEATHER_DATA") {
      return "Bu konum için hava durumu verisi alınamadı.";
    }
    if (error.message.indexOf("HTTP_") === 0) {
      return "Sunucu hatası oluştu (" + error.message.replace("HTTP_", "") + "). Lütfen daha sonra tekrar deneyin.";
    }
    if (error instanceof TypeError) {
      return "Bağlantı hatası: İnternet bağlantınızı kontrol edin.";
    }
    return "Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.";
  }

  setLoading(isLoading) {
    this.loading.classList.toggle("hidden", !isLoading);
    this.searchBtn.disabled = isLoading;
    this.input.disabled = isLoading;
    if (!isLoading) {
      this.input.focus();
    }
  }

  showError(message) {
    this.errorBox.textContent = message;
    this.errorBox.classList.remove("hidden");
  }

  hideError() {
    this.errorBox.textContent = "";
    this.errorBox.classList.add("hidden");
  }

  renderResult(data) {
    this.cityName.textContent = data.cityName;
    this.cityMeta.textContent = data.country + " • " + data.latitude.toFixed(2) + ", " + data.longitude.toFixed(2);
    this.temperature.textContent = data.temperature.toFixed(1) + " °C";
    this.condition.textContent = data.getConditionText();
    this.wind.textContent = data.windspeed + " km/s";
    this.windDir.textContent = data.getWindDirectionText();
    this.obsTime.textContent = data.getFormattedTime();
    this.updateFavButton();
    this.resultCard.classList.remove("hidden");
    this.drawChart(data);
  }

  isFavorite(name) {
    return this.favorites.some(function (f) {
      return f.toLowerCase() === name.toLowerCase();
    });
  }

  updateFavButton() {
    if (!this.currentData) {
      return;
    }
    if (this.isFavorite(this.currentData.cityName)) {
      this.favBtn.textContent = "★ Favorilerde";
      this.favBtn.classList.add("is-fav");
    } else {
      this.favBtn.textContent = "⭐ Favorilere Ekle";
      this.favBtn.classList.remove("is-fav");
    }
  }

  toggleFavorite() {
    if (!this.currentData) {
      return;
    }
    const name = this.currentData.cityName;
    if (this.isFavorite(name)) {
      this.removeFavorite(name);
    } else {
      this.favorites.push(name);
      this.saveFavorites();
      this.renderFavorites();
      this.updateFavButton();
    }
  }

  removeFavorite(name) {
    this.favorites = this.favorites.filter(function (f) {
      return f.toLowerCase() !== name.toLowerCase();
    });
    this.saveFavorites();
    this.renderFavorites();
    this.updateFavButton();
  }

  renderFavorites() {
    this.favList.innerHTML = "";
    this.favEmpty.classList.toggle("hidden", this.favorites.length > 0);

    this.favorites.forEach((name) => {
      const li = document.createElement("li");
      li.className = "fav-item";

      const nameBtn = document.createElement("button");
      nameBtn.type = "button";
      nameBtn.className = "fav-name";
      nameBtn.textContent = name;
      nameBtn.addEventListener("click", () => this.handleSearch(name));

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.className = "fav-remove";
      removeBtn.textContent = "✕";
      removeBtn.setAttribute("aria-label", name + " şehrini favorilerden kaldır");
      removeBtn.addEventListener("click", () => this.removeFavorite(name));

      li.appendChild(nameBtn);
      li.appendChild(removeBtn);
      this.favList.appendChild(li);
    });
  }

  drawChart(data) {
    const series = data.getNextHours(7);
    const temps = series.temps;
    const labels = series.labels;
    if (temps.length === 0) {
      return;
    }

    const ratio = window.devicePixelRatio || 1;
    const cssWidth = this.canvas.clientWidth || 640;
    const cssHeight = this.canvas.clientHeight || 300;
    this.canvas.width = Math.round(cssWidth * ratio);
    this.canvas.height = Math.round(cssHeight * ratio);

    const ctx = this.canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    const padLeft = 46;
    const padRight = 24;
    const padTop = 28;
    const padBottom = 36;
    const plotW = cssWidth - padLeft - padRight;
    const plotH = cssHeight - padTop - padBottom;

    let minT = Math.min.apply(null, temps);
    let maxT = Math.max.apply(null, temps);
    if (maxT - minT < 2) {
      maxT += 1;
      minT -= 1;
    }
    const range = maxT - minT;
    minT -= range * 0.1;
    maxT += range * 0.1;

    const xAt = (i) => {
      if (temps.length === 1) {
        return padLeft + plotW / 2;
      }
      return padLeft + (plotW * i) / (temps.length - 1);
    };
    const yAt = (t) => padTop + plotH - ((t - minT) / (maxT - minT)) * plotH;

    ctx.font = "12px Segoe UI, Arial, sans-serif";
    ctx.textBaseline = "middle";

    const gridLines = 4;
    ctx.lineWidth = 1;
    for (let g = 0; g <= gridLines; g++) {
      const value = minT + ((maxT - minT) * g) / gridLines;
      const y = yAt(value);
      ctx.beginPath();
      ctx.moveTo(padLeft, y);
      ctx.lineTo(padLeft + plotW, y);
      ctx.strokeStyle = "#e5e7eb";
      ctx.stroke();
      ctx.fillStyle = "#6b7280";
      ctx.textAlign = "right";
      ctx.fillText(value.toFixed(1), padLeft - 8, y);
    }

    ctx.beginPath();
    ctx.moveTo(padLeft, padTop);
    ctx.lineTo(padLeft, padTop + plotH);
    ctx.lineTo(padLeft + plotW, padTop + plotH);
    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    temps.forEach(function (t, i) {
      const x = xAt(i);
      const y = yAt(t);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    temps.forEach(function (t, i) {
      const x = xAt(i);
      const y = yAt(t);

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#2563eb";
      ctx.stroke();

      ctx.fillStyle = "#1f2937";
      ctx.textAlign = "center";
      ctx.fillText(t.toFixed(1) + "°", x, y - 16);

      ctx.fillStyle = "#6b7280";
      ctx.fillText(labels[i], x, padTop + plotH + 20);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new AppUI();
});