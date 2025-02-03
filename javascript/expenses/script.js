let expenses = "";

console.log("Hello from expenses");
function onAddExpense() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  console.log(date, "date");

  let expense = `<div class="expense">
          <div class="leftSide">
            <div class="dateWrapper">
              <span>August</span>
              <span>2020</span>
              <span>14</span>
            </div>
            <h3>${title}</h3>
          </div>
          <div class="rightSide">
            <div class="price">${amount}$</div>
            <button>Change</button>
          </div>
        </div>`;

  expenses += expense;

  document.getElementById("expenses").innerHTML = expenses;
}
