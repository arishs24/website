import React from "react";
import Layout, { Card, Go, ink, muted, underline } from "./Layout";
import WorldMap from "./WorldMap";
import {
  building,
  dreams,
  featuredOutlets,
  featuredStories,
  healthSystems,
  howILearn,
  passions,
  work,
} from "./content";

const grid = "grid md:grid-cols-[minmax(0,1fr)_minmax(0,500px)_minmax(0,1fr)] gap-x-12";

const Section = ({ id, label, wide = false, children }) => (
  <section id={id} className={`scroll-mt-8 ${grid} gap-y-4 mb-28`}>
    <h2 className="md:text-right text-[#e6e2db] text-[26px] md:text-[28px] uppercase leading-[1.1] tracking-[-0.25px] whitespace-pre-line">
      {label}
    </h2>
    <div className={`${muted} text-[17.6px] leading-[1.5] ${wide ? "md:col-span-2" : ""}`}>
      {children}
    </div>
  </section>
);

const Entry = ({ title, children }) => (
  <div className="mb-5 last:mb-0">
    <p className={ink}>{title}</p>
    {children}
  </div>
);

const Numbered = ({ items }) => (
  <ol className="list-decimal pl-[26px] marker:text-[#e6e2db]/50 space-y-[2px]">
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
          <p className="text-[#e6e2db]/50 text-[26px] md:text-[28px] uppercase leading-[1.1] tracking-[-0.25px]">
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
            the future of personalized human wellness, with{" "}
            <span className={ink}>Founders, Inc.</span> and{" "}
            <span className={ink}>Lightyear (HF0)</span>.
          </p>
          <p className="mb-6">
            Previously, I co-founded the company behind{" "}
            <span className={ink}>the first ML tool for PSP detection</span>, and built <span className={ink}>an app that helps people stay
            consistent with their Quran goals</span>. I donated its proceeds to people in need. In
            high school, I founded a startup that was{" "}
            <span className={ink}>acquired by a sports wearable company</span>.
          </p>
          <p className="mb-6">
            Along the way, I&rsquo;ve tried a lot of businesses: my own{" "}
            <span className={ink}>clothing brand</span>, reselling{" "}
            <span className={ink}>PS5s</span>, <span className={ink}>digital collectibles</span>,
            and <span className={ink}>tutoring</span>.
          </p>
          <p className="mb-6">
            I was named{" "}
            <Go to="https://yeyawards.com/2026" className={`${ink} ${underline}`}>
              Canada&rsquo;s Young Entrepreneur of the Year
            </Go>
            , and was <span className={ink}>top 20 out of 18,000</span> at the{" "}
            <span className={ink}>Hult Prize</span>, the world&rsquo;s largest student
            entrepreneurship competition.
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
            computation.
          </p>
        </Section>

        <Section id="featured" label={"Featured\nIn"}>
          <p className="text-[#f2efea] text-[20px] leading-[1.4] mb-8">
            {featuredOutlets.map((o, i) => (
              <React.Fragment key={o}>
                {i > 0 && <span className="text-[#e6e2db]/30"> &middot; </span>}
                <span className="whitespace-nowrap">{o}</span>
              </React.Fragment>
            ))}
          </p>
          {featuredStories.map((f) => (
            <Entry key={f.story} title={f.story}>
              <p>{f.headline}</p>
              <p className="text-[15px] mt-1">
                {f.sources.map((src, i) => (
                  <React.Fragment key={src.url}>
                    {i > 0 && <span className="text-[#e6e2db]/30"> &middot; </span>}
                    <Go to={src.url} className={underline}>{src.label}</Go>
                  </React.Fragment>
                ))}
              </p>
            </Entry>
          ))}
          <Go to="/articles#press" className={`${underline} inline-block mt-6`}>
            See all press.
          </Go>
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

        <Section id="health-systems" label={"Health\nSystems"} wide>
          <p className="mb-6 max-w-[500px]">
            I&rsquo;ve seen healthcare delivered up close in{" "}
            <span className={ink}>{healthSystems.length} countries</span>.
          </p>
          <WorldMap countries={healthSystems} />
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
