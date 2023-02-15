function getInputValueById(getId){
    const inputField = document.getElementById(getId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    
    return inputValue;
}

function getInputId(getId){
    return document.getElementById(getId)
}

function totalExpenses(){
    const foodCost = getInputValueById('food-cost')
    const restCost = getInputValueById('rent-cost')
    const clothesCost = getInputValueById('clothes-cost')
    const totalExpense = foodCost + restCost + clothesCost;
    return totalExpense;
}