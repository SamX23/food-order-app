import { Block, Link as KonstaLink, Navbar, Page, Panel } from "konsta/react";
import Link from "next/link";

const SidePanel = ({ open, setOpen }: any) => {
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

        <Block strongIos outlineIos className="space-y-4">
          <p>
            Still a work in progress, but you can order the food right away ...
          </p>
        </Block>

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
