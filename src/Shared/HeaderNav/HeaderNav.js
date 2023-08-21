import React from "react";
import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Tooltip,
  Text,
  Menu,
  UnstyledButton,
  Tabs,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowsRightLeft,
  IconBellFilled,
  IconChevronDown,
  IconDeviceMobile,
  IconHeartFilled,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconShoppingCartFilled,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
  IconUserCircle,
} from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";
import { IconSettings } from "@tabler/icons-react";
import { IconCategoryFilled } from "@tabler/icons-react";
import { useGetProductQuery } from "../../features/apiSlice";
import { Link } from "react-router-dom";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    // color: "#FFF",
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    // "&:hover": {
    //   backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    // },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      color: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.red[9],
    },
  },

  secondHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",

    // backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.red[8],
    // borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[2]}`,
    // marginBottom: rem(120),
  },

  secondHeaderSection: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.red[8],
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    // "&:hover": {
    //   backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    // },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  // burger: {
  //   [theme.fn.largerThan("xs")]: {
  //     display: "none",
  //   },
  // },

  userActive: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 600,
    display: "block",
    padding: `${rem(18)}`,
    textDecoration: "none",
    // color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[2],
    color: "#FFF",
    fontSize: theme.fontSizes.sm,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.red[9],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },

    "&[data-active]": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },

  tabActive: {
    "&, &:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.red[9],
    },
  },
}));
const links = [
  {
    link: "/compare",
    label: (
      <Tooltip label="compare">
        <IconArrowsRightLeft stroke={0.75} />
      </Tooltip>
    ),
  },
  {
    link: "/wishlist",
    label: (
      <Tooltip label="wishlist">
        <IconHeartFilled stroke={0.75} />
      </Tooltip>
    ),
  },
  {
    link: "/notification",
    label: (
      <Tooltip label="notification">
        <IconBellFilled stroke={0.75} />
      </Tooltip>
    ),
  },
  {
    link: "/profile",
    label: <IconUserCircle size={"2rem"} stroke={0.75} />,
  },
  {
    link: "/login",
    label: "Login",
  },
  {
    link: "/signUp",
    label: "Register",
  },
];

// const user = [{ name: "string", image: "string" }];
const tabs = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/flashSale",
    label: "Flash Sale",
  },
  {
    link: "/blogs",
    label: "Blogs",
  },
  {
    link: "/allBrands",
    label: "All Brands",
  },
  {
    link: "/allCategories",
    label: "All Categories",
  },
  {
    link: "/allSellers",
    label: "All Sellers",
  },
  {
    link: "/coupons",
    label: "Coupons",
  },
  {
    link: "/todaysDeal",
    label: "Todays Deal",
  },
];

const HeaderNav = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx, theme } = useStyles();

  const { data } = useGetProductQuery();
  console.log(data);
  const products = data?.products;

  const items = links.map((link) => (
    <a
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  const categories = [
    { label: "smartphones" },
    { label: "laptops" },
    { label: "fragrances" },
    { label: "skincare" },
    { label: "groceries" },
    { label: "Home decoration" },
    { label: "furniture" },
    { label: "tops" },
    { label: "Women" },
    { label: "Men" },
    // { label: "Women shoes" },
    // { label: "Women dresses" },
    // { label: "Women watches" },
    // { label: "Women jewelry" },
    // { label: "Women bags" },
    // { label: "Men shirts" },
    // { label: "Men shoes" },
    // { label: "Men watches" },
    // { label: "Men watches" },
    { label: "Sunglasses" },
    { label: "Automotive" },
    { label: "Motorcycle" },
    { label: "lighting" },
  ];

  // second header
  // const { classes, theme, cx } = useStyles();
  // const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const secondeHeaderItems = tabs.map((tab) => (
    <a
      href={tab.link}
      className={cx(classes.tab, { [classes.tabActive]: active === tab.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(tab.link);
        close();
      }}
    >
      {tab.label}
    </a>
  ));

  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsSubmenuOpen(!isSubMenuOpen);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container size={"1440px"}>
        {/* first header */}
        <Header height={HEADER_HEIGHT} className={classes.root}>
          <section className={classes.header}>
            <Text fw={700} c={"red"} component="a" href="/">
              Electon eCommerce
            </Text>

            <div className="lg:w-1/2 sm:w-2/12 md:w-2/6">
              <div class="relative text-gray-600 border rounded-full  ">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                  <svg
                    class="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    // style="enable-background:new 0 0 56.966 56.966;"
                    // xml:space="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>

            <Group spacing={5} className={classes.links}>
              {items}
            </Group>

            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

            <Transition transition="pop-top-right" duration={200} mounted={opened}>
              {(styles) => (
                <Paper className={classes.dropdown} withBorder style={styles}>
                  {items}
                </Paper>
              )}
            </Transition>
          </section>
        </Header>

        {/* second header */}
      </Container>
      <section className={classes.secondHeaderSection}>
        <Container size={"1440px"} className={classes.secondHeader}>
          <div className={classes.mainSection}>
            <Group position="apart">
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: "pop-top-right" }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <div className="relative inline-block  text-left">
                  <Text
                    onClick={toggleDropdown}
                    className="text-white font-bold cursor-pointer flex justify-between items-center gap-16 "
                  >
                    Categories (All)
                    <IconChevronDown />
                  </Text>
                  {isOpen && (
                    <div className="absolute w-[250px]   mt-6 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <div>
                          <Text
                            onClick={toggleSubMenu}
                            className="block px-4  py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            Computer & Accessories
                          </Text>

                          {isSubMenuOpen && (
                            <div className="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                              <div
                                className="py-1"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                              >
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  Option 1
                                </a>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  Option 2
                                </a>
                                <a
                                  href="#"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                  role="menuitem"
                                >
                                  Option 3
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Women Clothing & Fashion
                        </Link>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Men Clothing & Fashion
                        </Link>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Automobile & Motorcycle
                        </Link>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Skincare
                        </Link>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Fragrances
                        </Link>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Sunglasses
                        </Link>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Lighting
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* <Menu.Target>
                  <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                    <div className=" flex items-center justify-between gap-12 text-base-100 font-bold">
                      <Text className="flex items-center text-md">
                        <IconCategoryFilled size={"1rem"} /> Categories (All)
                      </Text>
                      <IconChevronDown size={"1.5rem"} stroke={1.5} />
                    </div>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={toggleDropdown}
                    icon={<IconDeviceMobile size="0.9rem" color={theme.colors.red[6]} stroke={1.5} />}
                  >
                    Computer & Accessories
                  </Menu.Item>
                  {isOpen && (
                    <div className="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Option 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Option 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Option 3
                        </a>
                      </div>
                    </div>
                  )}
                </Menu.Dropdown> */}
              </Menu>
            </Group>
          </div>
          <div>
            <Tabs
              defaultValue="Home"
              variant="outline"
              classNames={{
                root: classes.tabs,
                tabsList: classes.tabsList,
                tab: classes.tab,
              }}
            >
              <Tabs.List>{secondeHeaderItems}</Tabs.List>
            </Tabs>
          </div>
          <div>
            <div className="flex justify-evenly items-center gap-2 text-base-100 font-bold ">
              <IconShoppingCartFilled />
              <Text>$0.00 (0 items) </Text>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HeaderNav;
