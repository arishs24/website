import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Layout, { Card, Subscribe } from "./Layout";
import { pages } from "./content";

const Header = ({ title, updated }) => (
  <Card className="md:mt-[34px] pt-24 md:pt-[200px] pb-14 md:pb-[72px]">
    <div className="max-w-[700px] mx-auto">
      <h1 className="text-[#161616] text-[44px] md:text-[64px] leading-[1.1] tracking-[-0.5px] mb-4">
        {title}
      </h1>
      {updated && <p className="text-[#252525] text-[16px]">Last updated: {updated}</p>}
    </div>
  </Card>
);

const Body = ({ children }) => (
  <Card className="pt-16 md:pt-[100px] pb-24">
    <div className="max-w-[700px] mx-auto text-[#252525] text-[17px] leading-[1.65]">
      {children}
      <div className="mt-24">
        <Subscribe />
      </div>
    </div>
  </Card>
);

export const Blocks = ({ blocks }) =>
  blocks.map((b, i) => {
    if (b.h) return <h3 key={i} className="text-[#161616] text-[22px] mt-10 mb-3">{b.h}</h3>;
    if (b.ol)
      return (
        <ol key={i} className="list-decimal pl-7 mb-4 space-y-1">
          {b.ol.map((li) => <li key={li}>{li}</li>)}
        </ol>
      );
    return <p key={i} className="mb-4">{b.p}</p>;
  });

export const PageShell = ({ title, updated, children }) => (
  <Layout cards>
    <Header title={title} updated={updated} />
    <Body>{children}</Body>
  </Layout>
);

const Page = () => {
  const { slug } = useParams();
  const page = pages[slug];
  if (!page) return <Navigate to="/" replace />;
  return (
    <PageShell title={page.title} updated={page.updated}>
      <Blocks blocks={page.blocks} />
    </PageShell>
  );
};

export default Page;
