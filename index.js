const tipAmount = document.getElementById("show-tip-amount");
const totalAmount = document.getElementById("show-total-amount");
const person = document.getElementById("count-people");
const bill = document.getElementById("bill");
const selectTip = document.querySelectorAll(".select-tip");
const personError = document.getElementById("people-error");
const billError = document.getElementById("bill-error");
const reset = document.getElementById("reset");
const customTip = document.querySelector(".custom-btn");

selectTip.forEach((event) => {
  event.addEventListener("click", () => {
    let num = parseInt(event.value);
    let billValue = parseInt(bill.value);
    let personValue = parseInt(person.value);
    let totalPercentage = (num / 100) * billValue;
    let tipTotal = totalPercentage / personValue;
    let totalValue = billValue / personValue + tipTotal;
    tipAmount.textContent = tipTotal.toFixed(2);
    totalAmount.textContent = totalValue.toFixed(2);
    forValueZero();
    valueNaN();
  });

  customTip.addEventListener("input", () => {
    let customTipValue = parseInt(customTip.value) / 100;
    let billValue = parseInt(bill.value);
    let customPercentage = customTipValue * billValue;
    let tipTotal = customPercentage / parseInt(person.value);
    let totalBillValue = billValue / parseInt(person.value) + tipTotal;
    tipAmount.textContent = `$${tipTotal.toFixed(2)}`;
    totalAmount.textContent = `$${totalBillValue.toFixed(2)}`;
    forValueZero();
    valueNaN();
  });
});

function forValueZero() {
  if (bill.value == "") {
    bill.style.border = "1px solid red";
    billError.style.display = "block";
  } else {
    bill.style.border = "";
    billError.style.display = "none";
  }

  if (person.value == "") {
    person.style.border = "1px solid red";
    personError.style.display = "block";
  } else {
    person.style.border = "";
    personError.style.display = "none";
  }
}

function valueNaN() {
  if (tipAmount.textContent === "$NaN") {
    tipAmount.textContent = "$0.00";
  }

  if (totalAmount.textContent === "$NaN") {
    totalAmount.textContent = "$0.00";
  }
}

reset.addEventListener("click", () => {
  console.log("hello");
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
  bill.value = "";
  person.value = "";
  document.querySelector(".custom-btn").value = "";
});
