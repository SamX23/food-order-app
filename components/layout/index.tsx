import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Block,
  Link,
  Navbar,
  NavbarBackLink,
  Page,
  Sheet,
  Toolbar,
} from "konsta/react";
import { IoClose } from "react-icons/io5";
import {
  PagesContainerProps,
  PagesHeaderProps,
  PagesSheetsProps,
  ParentSectionProps,
} from "@/interfaces/component";
import CustomToast from "../Toast";
import useCartListener from "@/utils/hooks/cart";
import { GiHamburgerMenu } from "react-icons/gi";
import SidePanel from "./SidePanel";

/**
 *
 * @param title
 * @param description
 * @param children
 *
 * - Use Header component to add navigation and others
 * - Use Content to add content which already wrapped using Container component
 * - Use Footer to add toolbar and buttons stick to the bottom
 * - Use Sheet to add bottom sheet
 *
 * This component has Head meta tags for title and description
 * Also contains a tabs navigation
 *
 * @returns {JSX.Element}
 */

const Layout = ({
  metaTitle,
  metaDescription,
  children,
}: PagesContainerProps) => {
  const { lastItemName, toastOpened, setToastOpened } = useCartListener();

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name={metaDescription} content="Sign up" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Page
        colors={{
          bgIos: "bg-md-light-surface dark:bg-md-dark-surface-2",
          bgMaterial: "bg-md-light-surface dark:bg-md-dark-surface-2",
        }}
      >
        {children}

        {/* Toast */}
        <CustomToast
          isOpen={toastOpened}
          setIsOpen={setToastOpened}
          text={lastItemName}
        />
      </Page>
    </>
  );
};

/**
 *
 * @param title
 * @param enableNavigation
 * @param backUrl
 * @param customNavbar
 *
 * Has a condition to create :
 * - Fullscreen without navbar
 * - Fullscreen with navbar using navigation
 * - Fullscreen with navbar without navigation
 * - You can insert your custom navbar
 *
 * @returns {JSX.Element}
 */

const Header = ({
  title = "",
  enableNavigation = false,
  backUrl = "",
  rightNavbar,
  customNavbar,
}: PagesHeaderProps) => {
  const router = useRouter();
  const [panelOpened, setPanelOpened] = useState<boolean>(false);

  const handleSidebar = () => {
    setPanelOpened(true);
  };
  return (
    <>
      {enableNavigation ? (
        <Navbar
          title={title}
          left={
            <NavbarBackLink
              text="Back"
              onClick={() =>
                backUrl === "" ? router.back() : router.push(backUrl)
              }
            />
          }
          colors={{
            bgIos: "bg-md-light-surface dark:bg-md-dark-surface-2",
            bgMaterial: "bg-md-light-surface dark:bg-md-dark-surface-2",
            textIos: "text-primary dark:text-white",
            textMaterial: "text-primary dark:text-white",
          }}
          right={rightNavbar}
        />
      ) : (
        <>
          <Navbar
            large
            title={title}
            right={
              <Link navbar onClick={handleSidebar}>
                <GiHamburgerMenu size={30} />
              </Link>
            }
            colors={{
              textIos: "text-primary dark:text-white",
              textMaterial: "text-primary dark:text-white",
            }}
            transparent
          />

          {/* Sidepanel */}
          <SidePanel open={panelOpened} setOpen={setPanelOpened} />
        </>
      )}

      {customNavbar && customNavbar}
    </>
  );
};

const Content = ({ children, className = "" }: ParentSectionProps) => (
  <div className={`max-w-7xl sm:mx-auto ${className}`}>{children}</div>
);

/**
 *
 * Optional component to put a footer on mobile views where you can add buttons
 *
 * @returns {JSX.Element}
 */

const Footer = ({
  children,
  className = "",
  handleClick,
}: ParentSectionProps) => (
  <Toolbar
    className={`left-0 bottom-0 fixed w-full ${className}`}
    colors={{
      bgIos: "bg-md-light-surface dark:bg-md-dark-surface-2",
      bgMaterial: "bg-md-light-surface dark:bg-md-dark-surface-2",
    }}
    outline
    onClick={handleClick}
  >
    {children}
  </Toolbar>
);

const SheetModal = ({
  children,
  isOpen,
  setIsOpen,
  customToolbar,
  fullScreen,
  title,
  footer,
}: PagesSheetsProps) => (
  <Sheet
    className="pb-safe w-full"
    opened={isOpen}
    onBackdropClick={() => setIsOpen(false)}
  >
    {customToolbar ? (
      customToolbar
    ) : (
      <Toolbar top>
        <div></div>
        <div>{title}</div>
        <Link className="flex" toolbar onClick={() => setIsOpen(false)}>
          <IoClose size={25} />
        </Link>
      </Toolbar>
    )}

    <div
      className={`${
        fullScreen ? "h-[65vh]" : "h-full"
      } max-h-[80vh] overflow-auto`}
    >
      {children}
    </div>

    {footer && (
      <Toolbar>
        <Block className="w-full">{footer}</Block>
      </Toolbar>
    )}
  </Sheet>
);

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.SheetModal = SheetModal;

export default Layout;
