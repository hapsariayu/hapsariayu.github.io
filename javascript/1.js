let cost1 = document.getElementById('cost1')
let cost2 = document.getElementById('cost2')
let cost3 = document.getElementById('cost3')
let cost4 = document.getElementById('cost4')
let cost5 = document.getElementById('cost5')
let cost6 = document.getElementById('cost6')
let cost7 = document.getElementById('cost7')


function denotateNum(num) {
    // if(typeof num === "number"){

    // }
    let stringNum = num.toString()
    let temp = ""
    let temp2 = ""
    let penanda = 0
    for (let i = stringNum.length - 1; i >= 0; i--) {
        if (penanda % 3 === 0 && penanda !== 0) {
            temp += "."
            penanda = 0
        }
        temp += stringNum[i]
        penanda++
    }
    for (let i = temp.length - 1; i >= 0; i--) {
        temp2 += temp[i]

    }
    return `${temp2},00`
}

cost1.innerHTML = denotateNum(cost1.innerText)
cost2.innerHTML = denotateNum(cost2.innerText)
cost3.innerHTML = denotateNum(cost3.innerText)
cost4.innerHTML = denotateNum(cost4.innerText)
cost5.innerHTML = denotateNum(cost5.innerText)
cost6.innerHTML = denotateNum(cost6.innerText)
cost7.innerHTML = denotateNum(cost7.innerText)

let total = document.getElementById('hasiltotal')
let temp = 0

let btn1 = document.getElementById('btn1')
let txt1 = document.getElementById('txt1')
let qty1 = 1
function abc1() {

    if (txt1.innerHTML === 'vvip') {
        console.log('masuk sini');
        temp += qty1 * 2250000
        total.innerHTML = temp
        return txt1.innerHTML = `vvip (qty: 1)`
    }
    qty1++
    temp += qty1 * 2250000
    total.innerHTML = temp
    return txt1.innerHTML = `vvip (qty: ${qty1})`
}

btn1.addEventListener('click', abc1);

let btn2 = document.getElementById('btn2')
let txt2 = document.getElementById('txt2')
let qty2 = 1
function abc2() {

    if (txt2.innerHTML === 'vip') {
        temp += qty2 * 1500000
        total.innerHTML = temp
        return txt2.innerHTML = `vip (qty: 1)`
    }
    qty2++
    temp += qty2 * 1500000
    total.innerHTML = temp
    return txt2.innerHTML = `vip (qty: ${qty2})`
}

btn2.addEventListener('click', abc2);

let btn3 = document.getElementById('btn3')
let txt3 = document.getElementById('txt3')
let qty3 = 1
function abc3() {

    if (txt3.innerHTML === 'Regular') {
        temp += qty3 * 750000
        total.innerHTML = temp
        return txt3.innerHTML = `Regular (qty: 1)`
    }
    qty3++
    temp += qty3 * 750000
    total.innerHTML = temp
    return txt3.innerHTML = `Regular (qty: ${qty3})`
}

btn3.addEventListener('click', abc3);

let btn4 = document.getElementById('btn4')
let txt4 = document.getElementById('txt4')
let qty4 = 1
function abc4() {

    if (txt4.innerHTML === 'toteRRBag') {
        temp += qty4 * 250000
        total.innerHTML = temp
        return txt4.innerHTML = `toteRRBag (qty: 1)`
    }
    qty4++
    temp += qty4 * 250000
    total.innerHTML = temp
    return txt4.innerHTML = `toteRRBag (qty: ${qty4})`
}

btn4.addEventListener('click', abc4);

let btn5 = document.getElementById('btn5')
let txt5 = document.getElementById('txt5')
let qty5 = 1
function abc5() {

    if (txt5.innerHTML === 'posteRRB') {
        temp += qty5 * 50000
        total.innerHTML = temp
        return txt5.innerHTML = `posteRRB (qty: 1)`
    }
    qty5++
    temp += qty5 * 50000
    total.innerHTML = temp
    return txt5.innerHTML = `posteRRB (qty: ${qty5})`
}

btn5.addEventListener('click', abc5);

let btn6 = document.getElementById('btn6')
let txt6 = document.getElementById('txt6')
let qty6 = 1
function abc6() {

    if (txt6.innerHTML === 'RRB-shirt') {
        temp += qty6 * 500000
        total.innerHTML = temp
        return txt6.innerHTML = `RRB-shirt (qty: 1)`
    }
    qty6++
    temp += qty6 * 500000
    total.innerHTML = temp
    return txt6.innerHTML = `RRB-shirt (qty: ${qty6})`
}

btn6.addEventListener('click', abc6);

let btn7 = document.getElementById('btn7')
let txt7 = document.getElementById('txt7')
let qty7 = 1
function abc7() {

    if (txt7.innerHTML === 'RRBr-band') {
        temp += qty7 * 50000
        total.innerHTML = temp
        return txt7.innerHTML = `RRBr-band (qty: 1)`
    }
    qty7++
    temp += qty7 * 50000
    total.innerHTML = temp
    return txt7.innerHTML = `RRBr-band (qty: ${qty7})`
}

btn7.addEventListener('click', abc7);



// Get the modal
// var modal = document.getElementById("myModal");
// console.log(modal)
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



function order() {
    let dataBase = []
    let id = (dataBase.length - 1) + 1
    if(id === 0){
        id = 1
    }
    let name = prompt("nama", "")
    let email = prompt("email", "")
    let phone = prompt("phone number", "")
    // localStorage.setItem(kgjf,)
    dataBase.push({id, name, email, phone})
    console.log(dataBase)
}
console.log(order());
// function clear(){
//     temp = 0;
//     total.innerHTML = temp;
//     qty1, qty2, qty3, qty4, qty5, qty6, qty7 = 0;
   

// }