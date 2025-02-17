import CourseGoal from "./CourseGoal";
import { Coursegoaltype } from "../App";
type Coursegoal = {
  goals: Coursegoaltype[];
  handleDelete: (id: number) => void;
};
function CourseGoalList({ goals, handleDelete }: Coursegoal) {
  return (
    <ol>
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
    </ol>
  );
}
export default CourseGoalList;
