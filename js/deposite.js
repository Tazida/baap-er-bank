// step 1: add event listener to the deposite button

document.getElementById("btn-deposite").addEventListener("click", function () {
  // step 2: get the deposite amount from the deposite input field
  // For input field use .value to the value inside the input field
  const depositeField = document.getElementById("deposite-field");
  const newdepositeAmountString = depositeField.value;
  const newdepositeAmount = parseFloat(newdepositeAmountString);

  // step 3: get the current deposite total
  // for non-input(element other than input, textarea) use innerText to get the text
  const depositeTotalElement = document.getElementById("deposite-total");
  const previousdepositeTotalString = depositeTotalElement.innerText;
  const previousdepositeTotal = parseFloat(previousdepositeTotalString);

  // step 4: add numbers to set the total deposite
  const currentDepositeTotal = previousdepositeTotal + newdepositeAmount;
  // set the deposite total
  depositeTotalElement.innerText = currentDepositeTotal;

  // step 5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceString);

  // step 6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newdepositeAmount;
  // set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 7: clear the deposite field
  depositeField.value = "";
});
