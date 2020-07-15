import React, { useState, useEffect } from "react";
import Question from "./Components/Question";
import Form from "./Components/Form";
import ExpenseList from "./Components/ExpenseList";
import BudgetControl from "./Components/BudgetControl";

function App() {
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  useEffect(() => {
    if (createExpense) {
      // agrega el nuevo presupuesto
      setExpenses([...expenses, expense]);
      // resta del presupuesto actual
      const remainingBudget = remaining - expense.amount;
      setRemaining(remainingBudget);
      // resetear a false
      setCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Save Money</h1>

          <div className="contenido-principal contenido">
            {showQuestion ? (
              <Question
                saveBudget={setBudget}
                saveRemaining={setRemaining}
                showQuestion={setShowQuestion}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Form
                    addNewExpense={setExpense}
                    createNewExpense={setCreateExpense}
                  />
                </div>
                <div className="one-half column">
                  <ExpenseList expenses={expenses} />
                  <BudgetControl budget={budget} remaining={remaining} />
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
