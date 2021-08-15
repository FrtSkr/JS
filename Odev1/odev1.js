let myName = prompt("Adınızı Giriniz");
let text1DOM = document.querySelector("#text1");
let myClockDOM = document.querySelector("#myClock");
let text2DOM = document.querySelector("#text2");
let arrDay = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

// text1 yazısı
let text1 = `
Merhaba, <strong>${myName}</strong>! Hoş Geldin!
`;
text1DOM.innerHTML = text1;

// Saatin ve günün eklendiği kısım
function whatIsNowClock(){
    let newDay = new Date ();
    let newClock = new Date().toLocaleTimeString();
    myClockDOM.innerHTML = `${newClock} ${arrDay[newDay.getDay()-1]}`;
}
setInterval(whatIsNowClock, 1000);

// text2 yazısı
let nowDate = new Date().toLocaleDateString();
text2DOM.innerHTML = `
${nowDate} tarihinde <strong>Kodluyoruz Ve Patika.Dev React Native İle Mobile App Patikası</strong>'nın 
Javascript bölümü 1. ödevindeyim.
`;




