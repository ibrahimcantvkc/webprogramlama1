// Başlangıç verileri öğrencinin düzenleyebileceği kişisel planı doldurur.
// Üniversitenin resmî ders programı veya duyuruları değildir.
export const initialLessons = [
  {id:'l1',day:1,time:'09:00',duration:'10:30',title:'Web Programlama I',room:'B-204',type:'Uygulama',color:'coral'},
  {id:'l2',day:1,time:'11:00',duration:'12:30',title:'Veri Yapıları',room:'A-105',type:'Teori',color:'violet'},
  {id:'l3',day:2,time:'09:00',duration:'10:30',title:'Nesne Yönelimli Programlama',room:'Lab-2',type:'Uygulama',color:'teal'},
  {id:'l4',day:2,time:'13:00',duration:'14:30',title:'Veri Tabanı Yönetimi',room:'A-202',type:'Teori',color:'yellow'},
  {id:'l5',day:3,time:'10:00',duration:'11:30',title:'Web Programlama I',room:'Lab-1',type:'Uygulama',color:'coral'},
  {id:'l6',day:3,time:'13:00',duration:'14:30',title:'Algoritma Analizi',room:'B-103',type:'Teori',color:'teal'},
  {id:'l7',day:4,time:'09:30',duration:'11:00',title:'Bilgisayar Ağları',room:'A-106',type:'Teori',color:'violet'},
  {id:'l8',day:5,time:'11:00',duration:'12:30',title:'Veri Tabanı Yönetimi',room:'Lab-2',type:'Uygulama',color:'yellow'}
]
function deadlineAfter(days){
  const d=new Date()
  d.setDate(d.getDate()+days)
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`
}
export const initialTasks = [
  {id:'t1',title:'Vue bileşen ağacını düzenle',course:'Web Programlama I',deadline:deadlineAfter(3),priority:'Yüksek',done:false},
  {id:'t2',title:'SQL sorgularını tekrar et',course:'Veri Tabanı Yönetimi',deadline:deadlineAfter(4),priority:'Orta',done:false},
  {id:'t3',title:'Sunum konuşma akışını hazırla',course:'Web Programlama I',deadline:deadlineAfter(2),priority:'Yüksek',done:false},
  {id:'t4',title:'Haftalık ders planını oluştur',course:'Kişisel',deadline:deadlineAfter(0),priority:'Düşük',done:true}
]
export const initialNotes = [
  {id:'n1',title:'Proje hedefi',body:'Vue ile ders, görev ve not yönetimi arayüzü geliştir. Sunum Laboratuvarı’nda kullanılan bileşenleri incele.',color:'sand'},
  {id:'n2',title:'Derste hatırlat',body:'createApp, template, props ve emit akışını canlı olarak göster.',color:'lavender'}
]
export const weekdays = ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma']
