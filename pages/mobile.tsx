import Layout from "@/components/layout";
import {
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  BlockTitle,
} from "konsta/react";

const Mobile = (): JSX.Element => {
  return (
    <Layout>
      <Navbar title="My App" />

      <Block strong>
        <p>
          Here is your Next.js & Konsta UI app. Let&apos;s see what we have
          here.
        </p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem href="/" title="Home" />
        <ListItem href="/mobile" title="Mobile" />
      </List>

      <Block strong className="flex space-x-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Block>
    </Layout>
  );
};

export default Mobile;
