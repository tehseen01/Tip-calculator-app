const tipAmountPerson = document.getElementById("show-tip-amount");
const totalAmountPerson = document.getElementById("show-total-amount");
const countPerson = document.getElementById("count-people");
const bill = document.getElementById("bill");
const selectTip = document.querySelectorAll(".tip-btn");
const errorMessage = document.getElementById("error-message");
const reset = document.getElementById("reset");

selectTip.forEach((event) => {
  event.addEventListener("click", () => {
    let num = parseInt(event.value);
    let billValue = parseInt(bill.value);
    let personValue = parseInt(countPerson.value);
    let totalPercentage = (num / 100) * billValue;
    let tipTotal = totalPercentage / personValue;
    let totalValue = billValue / personValue + tipTotal;

    if (countPerson.value == "") {
      tipAmountPerson.textContent = "0.00";
      totalAmountPerson.textContent = "0.00";
      countPerson.style.border = "1px solid red";
      errorMessage.style.display = "block";
    } else {
      tipAmountPerson.textContent = tipTotal.toFixed(2);
      totalAmountPerson.textContent = totalValue.toFixed(2);
      countPerson.style.border = "";
      errorMessage.style.display = "none";
    }
  });
});

reset.addEventListener("click", () => {
  console.log("hello");
  tipAmountPerson.textContent = "0.00";
  totalAmountPerson.textContent = "0.00";
  bill.value = "";
  countPerson.value = "";
  document.querySelector(".custom-btn").value = "";
});
