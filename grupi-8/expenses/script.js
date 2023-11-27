function onAddExpenseHandler() {
  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  const expenses = document.getElementById("expenses");

  const expense = document.createElement("div");
  const divDate = document.createElement("div");
  const spanMonth = document.createElement("span");
  const spanYear = document.createElement("span");
  const spanDay = document.createElement("span");
  const headingTitle = document.createElement("h3");
  const divPrice = document.createElement("div");
  const spanPrice = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "Change Title!";
  spanPrice.innerText = amount;
  divPrice.appendChild(spanPrice);
  headingTitle.innerText = title;
  const d = date.split("-");
  spanYear.innerText = d[0];
  spanMonth.innerText = d[1];
  spanDay.innerText = d[2];
  divDate.appendChild(spanMonth);
  divDate.appendChild(spanYear);
  divDate.appendChild(spanDay);

  divDate.style.border = "1px solid black";
  divDate.style.borderRadius = "5px";
  divDate.style.display = "flex";
  divDate.style.flexDirection = "column";
  divDate.style.gap = "3px";

  expense.style.display = "flex";
  expense.style.justifyContent = "space-around";
  expense.style.alignItems = "center";
  expense.style.padding = "5px";
  expense.style.backgroundColor = "grey";
  expense.style.borderRadius = "10px";
  expense.style.width = "90%";
  expense.style.margin = "0 auto";

  expense.appendChild(divDate);
  expense.appendChild(headingTitle);
  expense.appendChild(divPrice);
  expense.appendChild(button);

  expenses.style.paddingTop = "15px";
  expenses.style.display = "flex";
  expenses.style.flexDirection = "column";
  expenses.style.gap = "20px";
  expenses.style.overflow = "scroll";

  expenses.appendChild(expense);
}
