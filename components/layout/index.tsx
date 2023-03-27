import { Page } from "konsta/react";
import Head from "next/head";

const Layout = ({
  children,
  title = "A page",
  desc = "A description",
}: any) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Page>{children}</Page>
  </>
);

export default Layout;
