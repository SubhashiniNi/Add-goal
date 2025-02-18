import { ReactNode } from "react";

type InfoBoxType = {
  mode: "hint" | "warning";
  children: ReactNode;
};

export default function InfoBox({ mode, children }: InfoBoxType) {
  if (mode === "hint") {
    return (
      <aside className="infobox">
        <p>{children}</p>
      </aside>
    );
  }
  return (
    <aside className="infobox">
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
