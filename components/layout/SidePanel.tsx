import Link from "next/link";
import {
  BlockTitle,
  Link as KonstaLink,
  List,
  ListItem,
  Navbar,
  Page,
  Panel,
  Toggle,
} from "konsta/react";

import { toggleDarkMode } from "@/context/actions";
import { useGlobalState } from "@/context/Provider";

const SidePanel = ({ open, setOpen }: any) => {
  const [{ darkMode }, dispatch]: any = useGlobalState();
  const handleToggleDarkMode = () => dispatch(toggleDarkMode());

  return (
    <Panel side="right" opened={open} onBackdropClick={() => setOpen(false)}>
      <Page className="flex flex-col">
        <Navbar
          title="Tentang"
          right={
            <KonstaLink navbar onClick={() => setOpen(false)}>
              Close
            </KonstaLink>
          }
        />

        <BlockTitle>Options</BlockTitle>
        <List strong inset>
          <ListItem
            label
            title="Dark Mode"
            after={
              <Toggle
                component="div"
                className="-my-1"
                checked={darkMode}
                onChange={handleToggleDarkMode}
              />
            }
          />
        </List>

        <div className="mt-auto p-2 text-center">
          Created with{" "}
          <span role="img" aria-label="love" className="text-red-500">
            ♥️
          </span>{" "}
          by{" "}
          <Link
            href="http://kalammallah.vercel.app/"
            target="_blank"
            className="font-semibold text-primary"
          >
            Kang Sami
          </Link>
        </div>
      </Page>
    </Panel>
  );
};

export default SidePanel;
