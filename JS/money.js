function getInput(inputId){
    const getInitialInput = document.getElementById(inputId)
    const initialInputText = getInitialInput.value;
    const inputValue = parseFloat(initialInputText);
    getInitialInput.value = '';
    return inputValue;
}

function updateInitailInput(initialTotal,initialAmount){
    const totalValue = document.getElementById(initialTotal);
    const previusAmountText = totalValue.innerText;
    const previousAmount = parseFloat(previusAmountText);
    totalValue.innerText = previousAmount + initialAmount;
}

function updateTotalBalance(isAdd , inputAmount){
    const totalBalace = document.getElementById('total-balance');
    const totalBalanceText = totalBalace.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    if(isAdd == true){
        totalBalace.innerText = previousBalance + inputAmount;
    }
    else{
        totalBalace.innerText = previousBalance - inputAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click',function(){
    const initialDeposit = getInput('deposit-input');
    updateInitailInput('total-deposit',initialDeposit);
    updateTotalBalance(true,initialDeposit)
})
document.getElementById('withdraw-button').addEventListener('click',function(){
    const initialWithdraw = getInput('withdraw-input');
    updateInitailInput('total-withdraw',initialWithdraw);
    updateTotalBalance(false,initialWithdraw);
})