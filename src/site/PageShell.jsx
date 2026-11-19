import React from "react";
import Layout, { Card } from "./Layout";

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
    </div>
  </Card>
);

export const PageShell = ({ title, updated, children }) => (
  <Layout cards>
    <Header title={title} updated={updated} />
    <Body>{children}</Body>
  </Layout>
);
