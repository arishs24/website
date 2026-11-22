import React from "react";
import { PageShell } from "./PageShell";
import { learnings } from "./content";

const Learnings = () => (
  <PageShell title={learnings.title} updated={learnings.updated}>
    <ol className="space-y-14">
      {learnings.items.map((item, i) => (
        <li key={item.title}>
          <p className="text-[#252525]/40 text-[15px] tabular-nums mb-1">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="text-[#161616] text-[24px] leading-[1.25] mb-3">{item.title}</h3>
          {item.body.map((para) => (
            <p key={para} className="mb-3 last:mb-0">{para}</p>
          ))}
        </li>
      ))}
    </ol>
  </PageShell>
);

export default Learnings;
