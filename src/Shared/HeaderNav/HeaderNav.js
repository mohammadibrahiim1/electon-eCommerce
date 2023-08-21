import React from "react";
import { useState } from "react";
import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import { IconArrowsRightLeft, IconBellFilled, IconHeartFilled, IconUserCircle } from "@tabler/icons-react";

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
      color: "#C92A2A",
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

const HeaderNav = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

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
  return (
    <div>
      <Container size={"xl"}>
        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
          <section className={classes.header}>
            <MantineLogo size={28} />

            <div className="w-1/2">
              <div class="relative text-gray-600 border rounded-full  ">
                <input
                  type="search"
                  name="search"
                  placeholder="Search"
                  class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none "
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
      </Container>
    </div>
  );
};

export default HeaderNav;
