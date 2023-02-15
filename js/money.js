
document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const totalExpense = totalExpenses()
    const incomeInputField = getInputValueById('income-range');
    if(totalExpense > incomeInputField){
        alert('cut your coat according your cloth')
        return;
    }
    const totalExpenseField = document.getElementById('total-expense');
    totalExpenseField.innerText = totalExpense;

    //income inputField
    
    const afterBalance = incomeInputField - totalExpense;
    
    //setValue in total balance
    
    const lessCostBalance = getInputId('after-balance')
    lessCostBalance.innerText = afterBalance;
    
       
})

document.getElementById('save-btn').addEventListener('click', function(){
    const savingField = getInputValueById('saving-field');
    const incomeInputField = getInputValueById('income-range');
    const parcentage = (incomeInputField / 100) * savingField;
    console.log(parcentage)
    const savigAmoun = getInputId('savings-amount');
    savigAmoun.innerText = parcentage;


    const totalExpense = totalExpenses();
    const afterBalance = incomeInputField - totalExpense;
    const remainingBalance = afterBalance - parcentage;
    const remainBalance = document.getElementById('remaining-balance');
    remainBalance.innerText = remainingBalance;

    
    

    
})




//valitdation


// document.getElementById('income-range').addEventListener('keyup',function(event){
//     if(parseFloat(event.target.value) <= 0 || isNaN(parseFloat(event.target.value))){
//         alert('not')
        
// document.getElementById('income-range').value = '';
        
//     }
// })
document.getElementById('income-range').addEventListener('keyup', function(event){
 if(parseFloat(event.target.value) <= 0 ){
    alert('not')
    document.getElementById('income-range').value = ''
 }
})
