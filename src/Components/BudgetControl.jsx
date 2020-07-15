import React from "react";
import { checkBudget } from "../helpers";
import PropTypes from "prop-types";

function BudgetControl({ budget, remaining }) {
  return (
    <React.Fragment>
      <div className="alert alert-primary">Budget: {budget}</div>
      <div className={checkBudget(budget, remaining)}>
        Remaining: {remaining}
      </div>
    </React.Fragment>
  );
}

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default BudgetControl;
