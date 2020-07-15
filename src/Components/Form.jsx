import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

function Form({ addNewExpense, createNewExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();
    // validar
    if (amount < 1 || isNaN(amount) || name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    // construir el gasto
    const expense = {
      name,
      amount,
      id: shortid.generate(),
    };
    // pasar el gasto al componente padre
    addNewExpense(expense);
    createNewExpense(true);
    // resetear form
    setName("");
    setAmount(0);
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Add your expenses</h2>

      {error ? <Error message="All fields are required" /> : null}

      <div className="campo">
        <label htmlFor="">Expenses Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex: Fruits"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="">Expenses Name</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ex: 300"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Expense"
      />
    </form>
  );
}

Form.propTypes = {
  addNewExpense: PropTypes.func.isRequired,
  createNewExpense: PropTypes.func.isRequired,
};

export default Form;
