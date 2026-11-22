import React from "react";
import { PageShell } from "./PageShell";
import { learnings } from "./content";

const Quote = ({ arabic, transliteration, translation, source }) => (
  <blockquote className="mt-5 border-l border-[#252525]/25 pl-5">
    {arabic && (
      <p lang="ar" dir="rtl" className="text-[#161616] text-[26px] leading-[1.8] text-right mb-2">
        {arabic}
      </p>
    )}
    {transliteration && <p className="italic text-[#252525]/70">{transliteration}</p>}
    {translation && <p className="text-[#161616]">{translation}</p>}
    <p className="text-[#252525]/50 text-[15px] mt-1">{source}</p>
  </blockquote>
);

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
          {item.quote && <Quote {...item.quote} />}
        </li>
      ))}
    </ol>
  </PageShell>
);

export default Learnings;
