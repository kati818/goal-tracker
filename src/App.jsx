import { useState } from "react";
import "./App.css";

const initialGoals = [
  {
    id: 1,
    goal: "Learn React",
  },
  {
    id: 2,
    goal: "Start to read a new book",
  },

  {
    id: 3,
    goal: "Learn more about niacinamide",
  },
];

function App() {
  const [goals, setGoals] = useState(initialGoals);

  function handleAddGoal(goal) {
    setGoals((goals) => [goal, ...goals]);
  }

  function handleRemoveGoal(goalId) {
    setGoals((goals) => goals.filter((goal) => goal.id !== goalId));
  }

  return (
    <div>
      <h1 className="header">🚀 Goal tracker</h1>
      <InputField onAddGoal={handleAddGoal} />
      <GoalsList goals={goals} onRemoveGoal={handleRemoveGoal} />
    </div>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function InputField({ onAddGoal }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newGoal = {
      id,
      goal: input,
    };

    onAddGoal(newGoal);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Set you goal here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function GoalsList({ goals, onRemoveGoal }) {
  return (
    <ul>
      {goals.map((goal) => (
        <Goal goal={goal} key={goal.id} onRemoveGoal={onRemoveGoal} />
      ))}
    </ul>
  );
}

function Goal({ goal, onRemoveGoal }) {
  return (
    <div>
      <p>{goal.goal}</p>
      <Button onClick={() => onRemoveGoal(goal.id)}>Done</Button>
    </div>
  );
}

export default App;
