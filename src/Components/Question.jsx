import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

function Question({ saveBudget, saveRemaining, showQuestion }) {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const defineBudget = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };

  const addBudget = (e) => {
    e.preventDefault();
    // Validar
    if (amount < 1 || isNaN(amount)) {
      setError(true);
      return;
    }
    // Si se pasa la validacion
    setError(false);
    saveBudget(amount);
    saveRemaining(amount);
    showQuestion(false);
  };

  return (
    <React.Fragment>
      <h2>Put Your Budget</h2>
      {error ? <Error message="The budget is wrong" /> : null}

      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Put your budget"
          onChange={defineBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define your budget"
        />
      </form>
    </React.Fragment>
  );
}

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  showQuestion: PropTypes.func.isRequired,
};

export default Question;
