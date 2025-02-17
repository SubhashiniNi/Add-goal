import { FormEvent, useRef } from "react";

type Addgoalprops = {
  handleAddGoal: (goal: string, summary: string) => void;
};
export function NewGoal({ handleAddGoal }: Addgoalprops) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // new FormData(event.currentTarget);
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;
    event.currentTarget.reset();
    handleAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal : </label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary : </label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
