import React from "react";
import { PageShell } from "./PageShell";
import { Go, ink, muted, underline } from "./Layout";
import { FREQUENCY, RESEARCHGATE, press, research } from "./content";

const Group = ({ id, label, children }) => (
  <section id={id} className="scroll-mt-8 mb-14 last:mb-0">
    <h3 className="text-[#161616] text-[13px] uppercase tracking-[0.12em] mb-4">{label}</h3>
    <ul className="space-y-3">{children}</ul>
  </section>
);

const Item = ({ href, title, sub }) => (
  <li>
    <Go to={href} className={`${ink} ${underline}`}>{title}</Go>
    {sub && <p className={`${muted} text-[15px]`}>{sub}</p>}
  </li>
);

const Articles = () => (
  <PageShell title="Articles">
    <Group id="writing" label="Writing">
      <Item
        href={FREQUENCY}
        title="The Frequency"
        sub="Research-backed articles for McMaster Engineering's student journal."
      />
    </Group>

    <Group id="research" label="Research">
      {research.map((r) => <Item key={r.href} href={r.href} title={r.title} sub={r.where} />)}
      <li>
        <Go to={RESEARCHGATE} className={`${muted} ${underline}`}>Everything on ResearchGate.</Go>
      </li>
    </Group>

    <Group id="press" label="Press">
      {press.map((p) => <Item key={p.url} href={p.url} title={p.title} sub={p.source} />)}
    </Group>
  </PageShell>
);

export default Articles;
