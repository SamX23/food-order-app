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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Page className="pb-4">{children}</Page>
  </>
);

export default Layout;
