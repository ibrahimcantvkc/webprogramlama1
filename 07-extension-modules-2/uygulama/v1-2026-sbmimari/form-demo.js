/**
 * ==========================================================================
 * SCÜ Şarkışla UBYO Web Programlama I - Hafta 10: Ş.B. Mimari
 * Modül: Web Forms & Client-Side Tools DevOps Studio v2.4
 * Geliştirici: Mert Özsoy (Rol 1: Canlı Uygulama & Kod)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elemanları ---
    const form = document.getElementById('mesajFormu');
    const adInput = document.getElementById('adiniz');
    const epostaInput = document.getElementById('eposta');
    const telefonInput = document.getElementById('telefon');
    const sunucuKoduInput = document.getElementById('sunucuKodu');
    const oncelikSelect = document.getElementById('oncelik');
    const kaynakSlider = document.getElementById('kaynakKullanimi');
    const sliderValueText = document.getElementById('sliderValue');
    const fileInput = document.getElementById('raporDosyasi');
    const dropZone = document.getElementById('dropZone');
    const fileSelectedName = document.getElementById('fileSelectedName');
    const chkDryRun = document.getElementById('chkDryRun');
    const chkSanitize = document.getElementById('chkSanitize');

    const btnGonder = document.getElementById('btnGonder');
    const btnSpinner = document.getElementById('btnSpinner');
    const btnPrefill = document.getElementById('btnPrefill');
    const btnExportJson = document.getElementById('btnExportJson');
    const btnSifirla = document.getElementById('btnSifirla');
    const formValidityBadge = document.getElementById('formValidityBadge');

    // Validation HUD
    const hudActiveElement = document.getElementById('hudActiveElement');
    const badgeValid = document.getElementById('badge-valid');
    const badgeValueMissing = document.getElementById('badge-valueMissing');
    const badgeTypeMismatch = document.getElementById('badge-typeMismatch');
    const badgePatternMismatch = document.getElementById('badge-patternMismatch');
    const badgeTooShort = document.getElementById('badge-tooShort');
    const badgeCustomError = document.getElementById('badge-customError');

    // Terminal & Payload
    const payloadView = document.getElementById('payloadView');
    const headersPreview = document.getElementById('headersPreview');
    const responseBlock = document.getElementById('responseBlock');
    const responseBodyView = document.getElementById('responseBodyView');
    const responseStatusBadge = document.getElementById('responseStatusBadge');
    const btnCopyPayload = document.getElementById('btnCopyPayload');
    const btnClearConsole = document.getElementById('btnClearConsole');

    // Toolchain Terminal
    const terminalLogs = document.getElementById('terminalLogs');
    const btnRunLint = document.getElementById('btnRunLint');
    const btnRunTest = document.getElementById('btnRunTest');
    const btnRunBuild = document.getElementById('btnRunBuild');
    const btnRunPipeline = document.getElementById('btnRunPipeline');
    const btnClearTerm = document.getElementById('btnClearTerm');

    // Tab Bar
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Ses ve Uptime
    const btnAudioToggle = document.getElementById('btnAudioToggle');
    const audioIcon = document.getElementById('audioIcon');
    const uptimeClock = document.getElementById('uptimeClock');
    const toastContainer = document.getElementById('toastContainer');

    let audioEnabled = true;
    let selectedFileObj = null;

    // ==========================================================================
    // 1. Web Audio API (Yüksek Teknolojili Ses Efektleri)
    // ==========================================================================
    let audioCtx = null;
    function playBeep(freq = 600, type = 'sine', duration = 0.08) {
        if (!audioEnabled) return;
        try {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            // Audio context engellendiyse sessizce devam et
        }
    }

    function playSuccessChime() {
        if (!audioEnabled) return;
        setTimeout(() => playBeep(523.25, 'triangle', 0.1), 0);
        setTimeout(() => playBeep(659.25, 'triangle', 0.1), 90);
        setTimeout(() => playBeep(783.99, 'triangle', 0.2), 180);
    }

    function playErrorBuzz() {
        if (!audioEnabled) return;
        setTimeout(() => playBeep(180, 'sawtooth', 0.12), 0);
        setTimeout(() => playBeep(140, 'sawtooth', 0.18), 100);
    }

    btnAudioToggle.addEventListener('click', () => {
        audioEnabled = !audioEnabled;
        audioIcon.textContent = audioEnabled ? '🔊' : '🔇';
        showToast('Ses Efektleri', audioEnabled ? 'Ses açık' : 'Ses kapatıldı', 'info');
    });

    // ==========================================================================
    // 2. Toast Bildirim Sistemi
    // ==========================================================================
    function showToast(title, message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';

        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <div class="toast-content">
                <strong>${title}</strong>
                <span>${message}</span>
            </div>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    // ==========================================================================
    // 3. Canlı Constraint Validation API Kontrolü ve HUD Güncelleme
    // ==========================================================================
    function updateHUD(input) {
        if (!input || !input.validity) {
            hudActiveElement.textContent = 'Aktif Alan: Yok';
            return;
        }

        hudActiveElement.textContent = `Aktif: <${input.tagName.toLowerCase()}#${input.id}>`;
        const v = input.validity;

        function setBadge(el, val) {
            el.querySelector('.v').textContent = val ? 'true' : 'false';
            el.classList.remove('is-true', 'is-false');
            el.classList.add(val ? 'is-true' : 'is-false');
        }

        setBadge(badgeValid, v.valid);
        setBadge(badgeValueMissing, v.valueMissing);
        setBadge(badgeTypeMismatch, v.typeMismatch);
        setBadge(badgePatternMismatch, v.patternMismatch);
        setBadge(badgeTooShort, v.tooShort);
        setBadge(badgeCustomError, v.customError);
    }

    function validateField(input, silent = false) {
        const errorSpan = document.getElementById(`error-${input.id}`);
        const isValid = input.validity.valid;

        updateHUD(input);

        if (isValid) {
            input.classList.remove('invalid');
            input.classList.add('valid');
            if (errorSpan) errorSpan.textContent = '';
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');

            if (errorSpan && !silent) {
                if (input.validity.valueMissing) {
                    errorSpan.textContent = '⚠️ Bu alan zorunludur.';
                } else if (input.validity.typeMismatch && input.type === 'email') {
                    errorSpan.textContent = '⚠️ Geçerli bir e-posta formatı giriniz (örn: ad@sirket.com).';
                } else if (input.validity.tooShort) {
                    errorSpan.textContent = `⚠️ En az ${input.minLength} karakter girmelisiniz (Şu an: ${input.value.length}).`;
                } else if (input.validity.patternMismatch) {
                    errorSpan.textContent = input.title || '⚠️ İstenen kalıp formatına uymuyor.';
                } else {
                    errorSpan.textContent = input.validationMessage || '⚠️ Hatalı veri girdisi.';
                }
            }
        }

        checkOverallFormValidity();
        return isValid;
    }

    function checkOverallFormValidity() {
        const isValid = form.checkValidity();
        if (isValid) {
            formValidityBadge.textContent = '✓ Tüm Alanlar Geçerli';
            formValidityBadge.className = 'form-badge valid';
        } else {
            formValidityBadge.textContent = '✗ Eksik / Geçersiz Alanlar';
            formValidityBadge.className = 'form-badge invalid';
        }
    }

    // Input dinleyicileri
    const monitoredInputs = [adInput, epostaInput, telefonInput, sunucuKoduInput];
    monitoredInputs.forEach(input => {
        if (!input) return;
        input.addEventListener('focus', () => {
            updateHUD(input);
            playBeep(450, 'sine', 0.04);
        });
        input.addEventListener('input', () => {
            validateField(input);
            updateLivePayloadPreview();
        });
        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    // ==========================================================================
    // 4. Range Slider ve Dosya Sürükle-Bırak
    // ==========================================================================
    kaynakSlider.addEventListener('input', (e) => {
        const val = e.target.value;
        let desc = 'Dengeli';
        if (val < 30) desc = 'Tasarruflu';
        else if (val > 75) desc = 'Maksimum Performans';
        sliderValueText.textContent = `${val}% RAM/CPU (${desc})`;
        updateLivePayloadPreview();
        playBeep(300 + (val * 4), 'sine', 0.03);
    });

    oncelikSelect.addEventListener('change', () => {
        updateLivePayloadPreview();
        playBeep(500, 'triangle', 0.05);
    });

    // Sürükle Bırak İşlemleri
    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.add('dragover');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZone.classList.remove('dragover');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const dt = e.dataTransfer;
        const files = dt.files;
        if (files.length > 0) {
            handleSelectedFile(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleSelectedFile(e.target.files[0]);
        }
    });

    function handleSelectedFile(file) {
        if (file.size > 2 * 1024 * 1024) {
            playErrorBuzz();
            showToast('Dosya Çok Büyük', 'Seçilen dosya 2MB sınırını aşıyor!', 'error');
            fileInput.value = '';
            fileSelectedName.textContent = '❌ Hata: Dosya 2MB sınırını aşıyor';
            selectedFileObj = null;
            return;
        }

        selectedFileObj = file;
        const sizeKb = (file.size / 1024).toFixed(1);
        fileSelectedName.textContent = `📄 ${file.name} (${sizeKb} KB - ${file.type || 'text/plain'})`;
        playBeep(800, 'sine', 0.08);
        showToast('Dosya Eklendi', `${file.name} başarıyla seçildi.`, 'info');
        updateLivePayloadPreview();
    }

    // ==========================================================================
    // 5. Canlı Payload & Headers Görünümü
    // ==========================================================================
    function getFormValuesObject() {
        return {
            adiniz: adInput.value || null,
            eposta: epostaInput.value || null,
            telefon: telefonInput.value || null,
            sunucuKodu: sunucuKoduInput.value || null,
            oncelik: oncelikSelect.value,
            kaynakKullanimi: `${kaynakSlider.value}%`,
            dosya: selectedFileObj ? {
                dosyaAdi: selectedFileObj.name,
                boyut: `${(selectedFileObj.size / 1024).toFixed(1)} KB`,
                mimeTuru: selectedFileObj.type || 'text/plain'
            } : 'Dosya seçilmedi',
            secenekler: {
                dryRun: chkDryRun.checked,
                sanitize: chkSanitize.checked
            },
            zamanDamgasi: new Date().toISOString()
        };
    }

    function updateLivePayloadPreview() {
        const payload = getFormValuesObject();
        payloadView.textContent = JSON.stringify(payload, null, 2);
    }

    // ==========================================================================
    // 6. Form Gönderme (Submit) — Gerçek Fetch ve FormData
    // ==========================================================================
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // 1. Doğrulama Kontrolü
        let isAllValid = true;
        monitoredInputs.forEach(input => {
            if (!validateField(input, false)) {
                isAllValid = false;
            }
        });

        if (!isAllValid) {
            playErrorBuzz();
            showToast('Form Geçersiz', 'Lütfen kırmızıyla işaretlenen alanları düzeltin.', 'error');
            const firstInvalid = form.querySelector('.invalid');
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        playBeep(700, 'triangle', 0.1);
        btnGonder.disabled = true;
        btnSpinner.hidden = false;
        btnGonder.querySelector('.btn-text').textContent = 'Operasyon İletiliyor...';

        // 2. FormData Nesnesi Oluşturma
        const formData = new FormData(form);
        if (selectedFileObj) {
            formData.set('raporDosyasi', selectedFileObj, selectedFileObj.name);
        }

        // Gönderilen başlıklar simülasyonu
        const boundaryId = '----WebKitFormBoundary' + Math.random().toString(36).substring(2, 15);
        headersPreview.textContent = `POST /posts HTTP/1.1
Host: jsonplaceholder.typicode.com
Content-Type: multipart/form-data; boundary=${boundaryId}
Content-Length: ~${JSON.stringify(getFormValuesObject()).length * 2} bytes
X-Client-Tool: SCU-SBMimari-DevOps-v2.4
Origin: http://localhost:5173`;

        const startTime = performance.now();

        try {
            // Gerçek POST İsteği
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: formData
            });

            const elapsed = Math.round(performance.now() - startTime);

            if (!response.ok) {
                throw new Error(`HTTP Durum Kodu: ${response.status} (${response.statusText})`);
            }

            const data = await response.json();
            playSuccessChime();

            responseBlock.hidden = false;
            responseStatusBadge.textContent = `${response.status} Created (${elapsed}ms)`;
            responseStatusBadge.style.color = '#10b981';

            responseBodyView.textContent = JSON.stringify({
                status: 'SUCCESS',
                httpCode: response.status,
                sure: `${elapsed} ms`,
                sunucuMesaji: 'Operasyon bildirimi başarıyla kuyruğa alındı.',
                sunucuTarafindanUretilenId: data.id,
                istemciFormDataOzeti: getFormValuesObject()
            }, null, 2);

            showToast('Operasyon Başlatıldı!', `Sunucu Yanıtı: 201 Created (${elapsed}ms)`, 'success');

            // Konsol sekmesine odaklan
            switchTab('tab-payload');

        } catch (error) {
            playErrorBuzz();
            responseBlock.hidden = false;
            responseStatusBadge.textContent = 'İletim Hatası';
            responseStatusBadge.style.color = '#ef4444';
            responseBodyView.textContent = `// HATA DETAYI:\n${error.message}`;
            showToast('İletim Hatası', error.message, 'error');
        } finally {
            btnGonder.disabled = false;
            btnSpinner.hidden = true;
            btnGonder.querySelector('.btn-text').textContent = 'Operasyonu Başlat (Submit)';
        }
    });

    // ==========================================================================
    // 7. Hızlı Doldur (Prefill) & Sıfırla
    // ==========================================================================
    btnPrefill.addEventListener('click', () => {
        adInput.value = 'Mert Özsoy';
        epostaInput.value = 'mert@sbmimari.dev';
        telefonInput.value = '0555 987 65 43';
        sunucuKoduInput.value = 'SRV-2026';
        oncelikSelect.value = 'yuksek';
        kaynakSlider.value = 85;
        sliderValueText.textContent = '85% RAM/CPU (Maksimum Performans)';

        monitoredInputs.forEach(input => validateField(input, true));
        updateLivePayloadPreview();
        playSuccessChime();
        showToast('Otomatik Dolduruldu', 'Örnek sistem verileri yüklendi.', 'info');
    });

    btnSifirla.addEventListener('click', () => {
        setTimeout(() => {
            monitoredInputs.forEach(input => {
                input.classList.remove('valid', 'invalid');
                const err = document.getElementById(`error-${input.id}`);
                if (err) err.textContent = '';
            });
            fileSelectedName.textContent = 'Henüz dosya seçilmedi';
            selectedFileObj = null;
            kaynakSlider.value = 50;
            sliderValueText.textContent = '50% RAM/CPU';
            formValidityBadge.textContent = 'Doldurulmayı Bekliyor';
            formValidityBadge.className = 'form-badge';
            updateLivePayloadPreview();
            updateHUD(null);
            playBeep(250, 'sine', 0.1);
        }, 50);
    });

    btnExportJson.addEventListener('click', () => {
        const json = JSON.stringify(getFormValuesObject(), null, 2);
        navigator.clipboard.writeText(json).then(() => {
            playBeep(900, 'sine', 0.08);
            showToast('Panoya Kopyalandı', 'Form yükü JSON formatında kopyalandı.', 'success');
        });
    });

    btnCopyPayload.addEventListener('click', () => {
        navigator.clipboard.writeText(payloadView.textContent).then(() => {
            playBeep(900, 'sine', 0.08);
            showToast('Kopyalandı', 'Canlı FormData yükü panoya alındı.', 'success');
        });
    });

    btnClearConsole.addEventListener('click', () => {
        responseBlock.hidden = true;
        updateLivePayloadPreview();
        playBeep(400, 'sine', 0.05);
    });

    // ==========================================================================
    // 8. Sekme Değiştirici (Tabs)
    // ==========================================================================
    function switchTab(tabId) {
        tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        tabContents.forEach(content => {
            content.classList.toggle('active', content.id === tabId);
        });
        playBeep(550, 'sine', 0.03);
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    // ==========================================================================
    // 9. Modül 2: Client-Side Toolchain Sanal Terminal Simülatörü
    // ==========================================================================
    function appendTerminal(lines, delay = 120) {
        let i = 0;
        function step() {
            if (i < lines.length) {
                const item = lines[i];
                const code = document.createElement('code');
                code.className = `term-line ${item.type || 'info'}`;
                code.textContent = item.text;
                terminalLogs.appendChild(code);
                terminalLogs.scrollTop = terminalLogs.scrollHeight;
                playBeep(600 + (i * 40), 'sine', 0.02);
                i++;
                setTimeout(step, delay);
            }
        }
        step();
    }

    btnClearTerm.addEventListener('click', () => {
        terminalLogs.innerHTML = `<code class="term-line prompt">$ // Terminal temizlendi.</code>`;
        playBeep(350, 'sine', 0.04);
    });

    // npm run lint
    btnRunLint.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ npx eslint . --config eslint.config.js' },
            { type: 'info', text: '🔍 [ESLint Flat Config]: src/ ve form/ dosyaları taranıyor...' },
            { type: 'info', text: '   -> index.html: HTML semantic kontrolü... OK' },
            { type: 'info', text: '   -> form-demo.js: No-unused-vars, valid-typeof... OK' },
            { type: 'success', text: '✨ 0 errors, 0 warnings. (Kod kalite standartları sağlandı)' }
        ], 140);
    });

    // npm run test
    btnRunTest.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ npm run test (vitest run)' },
            { type: 'info', text: '⚡ Vitest v1.6.0 runner başlatıldı...' },
            { type: 'success', text: '✓ tests/form-validation.test.js (3 tests passed)' },
            { type: 'info', text: '   ✓ checkValidity() doğru tetikleniyor (4ms)' },
            { type: 'info', text: '   ✓ Constraint Validation API regex pattern eşleşti (2ms)' },
            { type: 'info', text: '   ✓ FormData multipart sınırları otomatik oluşturuldu (3ms)' },
            { type: 'success', text: 'Test Files  1 passed (1)' },
            { type: 'success', text: 'Tests       3 passed (3)' },
            { type: 'info', text: 'Duration    248ms' }
        ], 130);
    });

    // npm run build
    btnRunBuild.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ npm run build (vite build)' },
            { type: 'info', text: 'vite v5.4.2 building for production...' },
            { type: 'info', text: 'transforming (14) modules...' },
            { type: 'info', text: '✓ 14 modules transformed.' },
            { type: 'success', text: 'dist/index.html                   3.84 kB │ gzip: 1.22 kB' },
            { type: 'success', text: 'dist/assets/index-D8jK1a9.css     4.12 kB │ gzip: 1.45 kB' },
            { type: 'success', text: 'dist/assets/index-B91mKw2.js      3.98 kB │ gzip: 1.38 kB' },
            { type: 'success', text: '✓ built in 184ms (Üretim paketi hazırlandı)' }
        ], 150);
    });

    // git push CI/CD
    btnRunPipeline.addEventListener('click', () => {
        switchTab('tab-toolchain');
        appendTerminal([
            { type: 'prompt', text: '$ git push origin main' },
            { type: 'info', text: 'Enumerating objects: 7, done.' },
            { type: 'info', text: 'Writing objects: 100% (7/7), 2.84 KiB, done.' },
            { type: 'info', text: 'To https://github.com/sbmimari/webprogramlama1.git' },
            { type: 'warning', text: '⚙️ GitHub Actions CI Pipeline Tetiklendi (#9481):' },
            { type: 'success', text: '   [✓ Job 1]: Install deps (npm ci) — 4s' },
            { type: 'success', text: '   [✓ Job 2]: Run tests (npm run test) — 2s' },
            { type: 'success', text: '   [✓ Job 3]: Build project (npm run build) — 3s' },
            { type: 'success', text: '   [✓ Job 4]: Deploy to GitHub Pages — Live at https://sbmimari.github.io' },
            { type: 'success', text: '🎉 Dağıtım Başarılı! Pipeline yeşil onay aldı.' }
        ], 180);
    });

    // ==========================================================================
    // 10. Canlı Çalışma Süresi Saati (Uptime Counter)
    // ==========================================================================
    let uptimeSeconds = 0;
    setInterval(() => {
        uptimeSeconds++;
        const hrs = String(Math.floor(uptimeSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((uptimeSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(uptimeSeconds % 60).padStart(2, '0');
        uptimeClock.textContent = `Çalışma Süresi: ${hrs}:${mins}:${secs}`;
    }, 1000);

    // Başlangıç ilk kontrolleri
    updateLivePayloadPreview();
    checkOverallFormValidity();
});