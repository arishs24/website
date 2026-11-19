import React from "react";
import Layout, { Card, Go, ink, muted, underline } from "./Layout";
import {
  building,
  dreams,
  highlights,
  howILearn,
  passions,
  press,
  work,
} from "./content";

const grid = "grid md:grid-cols-[minmax(0,1fr)_minmax(0,500px)_minmax(0,1fr)] gap-x-12";

const Section = ({ id, label, children }) => (
  <section id={id} className={`scroll-mt-8 ${grid} gap-y-4 mb-28`}>
    <h2 className="md:text-right text-[#252525] text-[26px] md:text-[28px] uppercase leading-[1.1] tracking-[-0.25px] whitespace-pre-line">
      {label}
    </h2>
    <div className={`${muted} text-[17.6px] leading-[1.5]`}>{children}</div>
  </section>
);

const Entry = ({ title, children }) => (
  <div className="mb-5 last:mb-0">
    <p className={ink}>{title}</p>
    {children}
  </div>
);

const Numbered = ({ items }) => (
  <ol className="list-decimal pl-[26px] marker:text-[#252525]/50 space-y-[2px]">
    {items.map(([pre, strong, post = ""]) => (
      <li key={strong}>
        {pre}<span className={ink}>{strong}</span>{post}
      </li>
    ))}
  </ol>
);

const Home = () => {
  return (
    <Layout>
      <Card className="md:mt-[34px] pt-16 md:pt-[100px] pb-24">
        <Section id="north-star" label={"North\nStar"}>
          <p className="text-[#252525]/50 text-[26px] md:text-[28px] uppercase leading-[1.1] tracking-[-0.25px]">
            Improve as many human lives
            <br />as possible, at the greatest
            <br />scale possible.
          </p>
        </Section>

        <Section id="about" label="About">
          <p className="mb-4">
            Hi, I&rsquo;m <span className={ink}>Arish Shahab</span>.
          </p>
          <p className="mb-6">
            Currently, I&rsquo;m building{" "}
            <Go to="https://amanolabs.com" className={`${ink} hover:opacity-60 transition-opacity`}>Amano</Go>,
            the future of personalized human wellness.
          </p>
          <p className="mb-6">
            Previously, I co-founded <span className={ink}>Neurite</span>, the first ML tool for
            PSP detection, and built <span className={ink}>Manar</span>, a top-100 religion app on
            the App Store. In high school, I founded a startup that was{" "}
            <span className={ink}>acquired by a sports wearable company</span>.
          </p>
          <p className="mb-6">
            I study Integrated Biomedical Engineering &amp; Health Sciences at{" "}
            <span className={ink}>McMaster</span>, and do research at{" "}
            <span className={ink}>Harvard Medical School</span>,{" "}
            <span className={ink}>Johns Hopkins</span> and{" "}
            <span className={ink}>University Health Network</span> in orthopaedics and
            neuroscience.
          </p>
          <p>
            I want to practice medicine, but I can&rsquo;t ignore what&rsquo;s possible with
            computation. Most weeks you&rsquo;ll still find me behind a pharmacy counter.
          </p>
        </Section>

        <Section id="featured" label={"Featured\nIn"}>
          {press.map((p) => (
            <Entry key={p.url} title={p.source}>
              <Go to={p.url} className={underline}>{p.title}</Go>
            </Entry>
          ))}
        </Section>

        <Section id="passions" label="Passions">
          {passions.map((p) => (
            <Entry key={p.title} title={p.title}>
              <p>{p.body}</p>
              {p.link && <Go to={p.link.href} className={underline}>{p.link.label}</Go>}
            </Entry>
          ))}
        </Section>

        <Section id="work" label="Work">
          {work.map((w) => (
            <Entry key={w.org} title={w.org}>
              <p>{w.desc}</p>
            </Entry>
          ))}
        </Section>

        <Section id="building" label={"Building\nOthers"}>
          {building.map((b) => (
            <Entry key={b.title} title={b.title}>
              <p>{b.body}</p>
              {b.link && <Go to={b.link.href} className={underline}>{b.link.label}</Go>}
            </Entry>
          ))}
        </Section>

        <Section id="highlights" label="Highlights">
          <Numbered items={highlights} />
        </Section>

        <Section id="dreams" label="Dreams">
          <Numbered items={dreams} />
        </Section>

        <Section id="how-i-learn" label={"How I\nLearn"}>
          {howILearn.map((h) => (
            <div key={h.lead} className="mb-6 last:mb-0">
              <p className={ink}>
                {h.lead}
                {h.muted && <span className={muted}> {h.muted}</span>}
              </p>
              {h.link && <Go to={h.link.href} className={underline}>{h.link.label}</Go>}
            </div>
          ))}
        </Section>

      </Card>
    </Layout>
  );
};

export default Home;
