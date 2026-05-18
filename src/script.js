//DOM elements 
let descInput = document.getElementById("desc")
let amountInput = document.getElementById("amount")
let incomeButton = document.getElementById("incomeBtn")
let expenseButton = document.getElementById("expenseBtn")
let incomeList = document.getElementById("incomeList")
let expenseList = document.getElementById("expenseList")
let HTMLbalance = document.getElementById("balance")
//


const incomes = [] //array for incomes 

//function to add objects into array
function addIncome (){
    const incomeDesc = descInput.value;
    const incomeAmount = Number(amountInput.value);

    const newIncome = {
        incomeDesc: incomeDesc,
        incomeAmount: incomeAmount,
    }
    //if statement, for amounts over 0 and anything that isn't an empty string.
    if(incomeAmount > 0 && incomeDesc != ""){
    incomes.push(newIncome)
    }
       
    console.log(incomes)
    showIncome()


    descInput.value = ""
    amountInput.value = ""

}

//function to show income and text
function showIncome (){
    incomeList.innerHTML = ""

    for(let income of incomes){
        const li = document.createElement("li")
        li.textContent = `${income.incomeDesc} - ${income.incomeAmount} kr (Inkomst)`
        incomeList.appendChild(li)
    
        
    }

}

const expenses = []

//function to add objects into array
function addExpense (){
    const expenseDesc = descInput.value;
    const expenseAmount = Number(amountInput.value);

    const newExpense = {
        expenseDesc: expenseDesc,
        expenseAmount: expenseAmount,
    }

    if(expenseAmount > 0 && expenseDesc != ""){
      expenses.push(newExpense)
    }

    console.log(expenses)
    showExpense()

    descInput.value = ""
    amountInput.value = ""

}

//function to show expenses aND text
function showExpense (){
    expenseList.innerHTML = ""

    for(let expense of expenses){
        
        const li = document.createElement("li")
        li.textContent = `${expense.expenseDesc} - ${expense.expenseAmount} kr (Utgift)`
        expenseList.appendChild(li)
    }
}

//function to sum up non-object arrays
function calculateBalance (amounts){
   let sum = 0
    for(let amount of amounts){
        sum += amount
    }
    return sum
}

const incAmounts = []

//function to add Numbers into array
function addIncAmount(){

    const newIncAmount = Number(amountInput.value)
    const incDesc = descInput.value
    if(newIncAmount > 0 && incDesc != ""){
    incAmounts.push(newIncAmount)
    }
}

const expAmounts = []

//function to add Numbers into array
function addExpAmounts(){

    const newExpAmount = Number(amountInput.value)
    const expDesc = descInput.value
    if(newExpAmount > 0 && expDesc != ""){
    expAmounts.push(newExpAmount)
    }
}

//function to calculate the difference between my two number arrays
function showBalance(){
    const sum = calculateBalance(incAmounts)
    const sum2 = calculateBalance(expAmounts)
    HTMLbalance.innerHTML = sum - sum2
}

descInput.value = ""
amountInput.value = ""

incomeButton.addEventListener("click", ()=> {
    addIncAmount()
    addIncome()
    showBalance()
})

expenseButton.addEventListener("click", ()=> {

    addExpAmounts()
    addExpense()
    showBalance()
})