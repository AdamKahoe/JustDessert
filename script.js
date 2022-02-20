console.log("JavaScript is connected");

function message () {
    alert('You have searched for tiramisu')
    alert('You have searched for cupcakes')
}

function searchbox() {
    let inputVal = document.querySelector(".searchbox").value;
    alert('You have searched for tiramisu')
    alert('You have searched for cupcakes')
}

let numCount = 68
let count = document.querySelector('.count')
function addLike () {
    numCount ++
    count.innerText = numCount
}