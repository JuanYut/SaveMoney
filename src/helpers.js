export const checkBudget = (budget, remaining) => {
  let theClassName = "";

  if (budget / 4 > remaining) {
    theClassName = "alert alert-danger";
  } else if (budget / 2 > remaining) {
    theClassName = "alert alert-warning";
  } else {
    theClassName = "alert alert-success";
  }

  return theClassName;
};
