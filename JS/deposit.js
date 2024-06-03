// step 1 : add even listner to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2 : Please Deposit : field er kaj
    const depositField = document.getElementById('user-deposit');
    const newDepositAmountString = depositField.value;
    // man sula string chilo (parseFloat) use kore number a nichi 
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step 3 : Deposit : Total deposit field er kaj
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // man sula string chilo (parseFloat) use kore number a nichi 
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // depositTotalElement.innerText = newDepositAmount;
    // step 4 : step 2 er man ta step 3 te sum kora 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total 
    depositTotalElement.innerText = currentDepositTotal;

    // step 5 : Balance : Total deposit barar sathe sathe Balace o barbe
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    // man sula string chilo (parseFloat) use kore number a nichi
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6 : total depost + balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: text box ta khali korar jonno
    depositField.value = '';
})