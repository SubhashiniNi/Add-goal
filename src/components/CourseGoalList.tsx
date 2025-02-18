import CourseGoal from "./CourseGoal";
import { Coursegoaltype } from "../App";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";

type Coursegoal = {
  goals: Coursegoaltype[];
  handleDelete: (id: number) => void;
};
function CourseGoalList({ goals, handleDelete }: Coursegoal) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        No Goals in your plate, try to add your goals!!!!!
      </InfoBox>
    );
  }
  let warning: ReactNode;
  if (goals.length >= 4) {
    warning = (
      <InfoBox mode="warning">you have too many goals in yout list</InfoBox>
    );
  }

  return (
    <>
      {/* {goals.length >= 4 && (
        <InfoBox mode="warning">you have too many goals in yout list</InfoBox>
      )}--Another way of doing it */}
      {warning}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              description={goal.description}
              id={goal.id}
              handleDelete={handleDelete}
            >
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseGoalList;
