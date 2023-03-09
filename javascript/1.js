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

let btn1 = document.getElementById('btn1')
let txt1 = document.getElementById('txt1')
let qty = 1
function abc() {
    
    if (txt1.innerHTML === 'vvip') {
        return txt1.innerHTML = `vvip (qty: 1)`
    }
    qty++
    return txt1.innerHTML = `vvip (qty: ${qty})`
}

btn1.addEventListener('click', abc);
console.log(txt1.innerHTML);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}