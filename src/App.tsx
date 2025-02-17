import { useState } from "react";

import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import { NewGoal } from "./components/NewGoal";

export type Coursegoaltype = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  // const [goals, setGoals] = useState<Array<Coursegoal>>([]);
  //or
  const [goals, setGoals] = useState<Coursegoaltype[]>([]);
  function handleAddGoal(goal: string, summary: string) {
    const newGoal: Coursegoaltype = {
      id: Math.random(),
      title: goal,
      description: summary,
    };
    setGoals((goal) => {
      return [...goal, newGoal];
    });
  }
  function handleDelete(id: number) {
    const newGoal = goals.filter((goal) => goal.id !== id);
    setGoals(newGoal);
  }
  return (
    <main>
      <Header source={{ image: "/goals.jpg", alt: "your course goal" }} />
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal handleAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} handleDelete={handleDelete} />
    </main>
  );
}
