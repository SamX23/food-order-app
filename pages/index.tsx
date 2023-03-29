import { useEffect } from "react";
import {
  Navbar,
  Block,
  Button,
  BlockTitle,
  Toolbar,
  Sheet,
  Link,
} from "konsta/react";
import { useGlobalState } from "@/context/Provider";
import { addToBasket, toggleBasket } from "@/context/actions";
import Image from "next/image";
import Layout from "@/components/layout";

const Home = (): JSX.Element => {
  const [{ basket }, dispatch]: any = useGlobalState();

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <Layout>
      <Navbar large transparent title="Jajanan Bu Nanay" subtitle="Subtitle" />
      <BlockTitle>Ayo jajan di warung online bu Nanay</BlockTitle>
      <Block strong inset>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
      </Block>

      <Block className="space-y-4">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          className="mx-auto my-4 dark:bg-white p-2 rounded"
        />

        <Button onClick={() => dispatch(addToBasket("asdasd"))}>Action</Button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tempore
          ratione unde accusantium distinctio nulla quia numquam earum odio,
          optio, nisi rem deserunt. Molestiae delectus, ut assumenda numquam
          magni enim.
        </p>
      </Block>

      {/* Sheet Basket Checkout */}
      <Sheet
        className="pb-safe"
        opened={basket.opened}
        onBackdropClick={() => dispatch(toggleBasket())}
      >
        <Toolbar top>
          <div className="left" />
          <div className="right">
            <Link toolbar onClick={() => dispatch(toggleBasket())}>
              Done
            </Link>
          </div>
        </Toolbar>
        <Block>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum ad
            excepturi nesciunt nobis aliquam. Quibusdam ducimus neque
            necessitatibus, molestias cupiditate velit nihil alias incidunt,
            excepturi voluptatem dolore itaque sapiente dolores!
          </p>
          <div className="mt-4">
            <Button onClick={() => dispatch(toggleBasket())}>Action</Button>
          </div>
        </Block>
      </Sheet>

      {/* Basket Info */}
      <Toolbar className="bottom-0 fixed">
        <Block className="bg-primary w-full">
          <Button onClick={() => dispatch(toggleBasket())}>Open Basket</Button>
        </Block>
      </Toolbar>
    </Layout>
  );
};

export default Home;
