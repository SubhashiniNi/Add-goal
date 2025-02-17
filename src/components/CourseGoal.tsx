// interface Coursegl {
//   title: string;
//   description: string;

import { PropsWithChildren } from "react";

// import { PropsWithChildren, ReactNode } from "react";
// import { ReactNode } from "react";
// }
// type Coursegoal = {
//   title: string;
//   description: string;
//   children: ReactNode;
// };

type Coursegoal = PropsWithChildren<{
  id: number;
  title: string;
  description: string;
  handleDelete: (id: number) => void;
}>;

// interface Coursegoal {
//   title: string;
//   description: string;
//   children: ReactNode;
// }

export default function CourseGoal({
  id,
  title,
  description,
  handleDelete,
}: Coursegoal) {
  return (
    <article>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </article>
  );
}
