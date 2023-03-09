console.log("test")
const countdownDate = new Date("March 10, 2023 09:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();

  const timeRemaining = countdownDate - now;

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown has ended";
  }
}, 1000);


let cost = document.getElementById('cost')
// function denotateNum(num){
//   let stringNum = num.toString()
//     let temp = ""
//     let temp2 = ""
//     let penanda = 0
//     for (let i = stringNum.length - 1; i >= 0; i--) {
//         if (penanda % 3 === 0 && penanda !== 0) {
//             temp += "."
//             penanda = 0
//         }
//         temp += stringNum[i]
//         penanda ++
//     }
//     for (let i = temp.length - 1; i >= 0; i--) {
//         temp2 += temp[i]
        
//     }
//     return `${temp2},00`
// }
// console.log(denotateNum(cost.value));
//Line ini sampai ke bawah, di abaikan dulu ya, ini masih drafting buat bikin fungsi CRUD nya hehehe (ayu)
/*
Taylor Swift
IU
Kyary Pamyu Pamyu
Isyana Sarasvati
Raisa
*/
let name = document.getElementById('');
let email = document.getElementById('');
let guestStar = document.getElementById('');
let totalTicket = document.getElementById('');

function getOrder() {
  const pricing = {'Taylor Swift': 1500000, 'IU': 1250000, }
  const dataBase = [];
  let id = (dataBase.length - 1) + 1

}