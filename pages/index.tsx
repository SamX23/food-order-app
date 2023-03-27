import { useContext, useEffect } from "react";
import AppContext from "@/context";
import { Navbar, Block, Button, List, ListItem } from "konsta/react";
import Image from "next/image";
import Layout from "@/components/layout";

const Home = (): JSX.Element => {
  const context = useContext(AppContext);

  useEffect(() => {
    console.log(context.basket);
  }, [context]);

  return (
    <Layout>
      <Navbar title="My App" />
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
        className="mx-auto my-4 dark:bg-white p-2 rounded"
      />
      <Block>
        <p>Here comes my app</p>
      </Block>
      <Block className="space-y-4">
        <p>Here comes the button</p>
        <Button onClick={() => context.addToBasket("asd")}>Action</Button>

        <List>
          <ListItem href="/" title="Home" />
          <ListItem href="/mobile" title="Mobile" />
        </List>
      </Block>
    </Layout>
  );
};

export default Home;
