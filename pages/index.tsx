import { useEffect, useState } from "react";
import {
  Navbar,
  Block,
  Button,
  BlockTitle,
  Toolbar,
  Sheet,
  Link,
  List,
  ListItem,
  Toast,
} from "konsta/react";
import { useGlobalState } from "@/context/Provider";
import { addToBasket, toggleBasket } from "@/context/actions";
import Image from "next/image";
import Layout from "@/components/layout";

const Home = (): JSX.Element => {
  const [{ basket, isBasketOpened }, dispatch]: any = useGlobalState();
  const [toastOpened, setToastOpened] = useState<boolean>(false);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  const FOOD_DATA = [
    {
      id: 0,
      title: "Yellow Submarine",
      subTitle: "Beatles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.",
      price: "5000",
      image: "/assets/images/fla-1.jpg",
      quantity: 1,
    },
    {
      id: 1,
      title: "Yellow Submarine",
      subTitle: "Beatles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.",
      price: "5000",
      image: "/assets/images/fla-2.jpg",
      quantity: 1,
    },
    {
      id: 2,
      title: "Yellow Submarine",
      subTitle: "Beatles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.",
      price: "5000",
      image: "/assets/images/fla-3.jpg",
      quantity: 1,
    },
  ];

  const openToast = (setter: (arg0: boolean) => void) => {
    // close other toast
    setter(true);
    setTimeout(() => setter(false), 1500);
  };

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

        <BlockTitle>Food List</BlockTitle>
        <List>
          {FOOD_DATA.map(
            (
              { id, title, subTitle, description, price, image, quantity },
              index
            ) => (
              <ListItem
                key={index}
                title={title}
                after={`Rp. ${price}`}
                subtitle={subTitle}
                text={description}
                media={
                  <Image
                    src={image}
                    alt={title}
                    width={80}
                    height={80}
                    priority
                    className="mx-auto my-4 dark:bg-white rounded"
                  />
                }
                onClick={() => {
                  dispatch(
                    addToBasket({
                      id,
                      title,
                      price,
                      quantity,
                    })
                  );

                  openToast(setToastOpened);
                }}
              />
            )
          )}
        </List>

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
        opened={isBasketOpened}
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

      {/* Toast */}
      <Toast
        opened={toastOpened}
        button={
          <Button
            rounded
            clear
            small
            inline
            onClick={() => setToastOpened(false)}
          >
            Close
          </Button>
        }
      >
        <div className="shrink">Item added to basket !</div>
      </Toast>
      {/* Basket Info */}
      {basket.length > 0 && (
        <Toolbar className="bottom-0 fixed">
          <Block className="bg-primary w-full">
            <Button onClick={() => dispatch(toggleBasket())}>
              Open Basket
            </Button>
          </Block>
        </Toolbar>
      )}
    </Layout>
  );
};

export default Home;
