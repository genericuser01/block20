const numBank = document.getElementById("numBank")
let numBankArr=[]
const odds = document.getElementById("odds")
const evens = document.getElementById("evens")


function addNumber(num, event){
    event.preventDefault();
    console.log(num)

    numBankArr.push(num)
    numBank.innerHTML=numBankArr.join(",")
}

let oddsArr=[]
let evensArr = []

function sort1(){
    let firstNum = numBankArr.shift()
    if(firstNum % 2 == 0){
        evensArr.push(firstNum)
    }else{
        oddsArr.push(firstNum)
    }
    numBank.innerHTML=numBankArr.join(",")
    odds.innerHTML=oddsArr.join(",")
    evens.innerHTML=evensArr.join(",")

}

function sortAll(){
    while (numBankArr.length > 0) {
        let num = numBankArr.shift();
        if (num % 2 === 0) {
            evensArr.push(num);
        } else {
            oddsArr.push(num);
        }
    }
    numBank.innerHTML = numBankArr.join(",");
    odds.innerHTML = oddsArr.join(",");
    evens.innerHTML = evensArr.join(",");
}