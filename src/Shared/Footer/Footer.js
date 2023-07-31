import { createStyles, Text, Container, ActionIcon, Group, rem, Image, Input, Button } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconAt } from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[9],
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]}`,
  },

  logo: {
    width: "300px",
    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(16),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    maxWidth: "1400px",
    margin: "auto",
    // display: "flex",
    // justifyContent: "space-evenly",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  subscribe_button: {
    backgroundColor: "#D43533 !important",
    border: "1px solid #D43533 ",
    borderRadius: 0,
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const data = [
  {
    links: [
      { label: "Shop", link: "/Shop" },
      { label: "Contact", link: "/Contact" },
      { label: "Privacy & Policy", link: "/Privacy & policy" },
      { label: "About", link: "/About" },
    ],
  },
];

export const Footer = () => {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={classes.link} component="a" href={link.link} onClick={() => link.link}>
        {link.label}
      </Text>
    ));
    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <section className={classes.inner}>
        <div className={classes.logo}>
          <Link to="/">
            <Image
              width={283}
              height={44}
              mx="auto"
              radius="md"
              src="https://i.ibb.co/0nfytmZ/R4x-NSs0c-HVjjv-Uh-Gq4-I3z71-D7feug7-LDAv-Lbo3wu.png"
              alt="Random image"
            />
          </Link>
          <Text size="sm" color="#f2f3f8" className={classes.description}>
            Complete system for your eCommerce business
          </Text>
        </div>
        <div>
          <div className="w-[700px] flex items-center justify-between gap-3 mt-5">
            <Input.Wrapper
              radius={0}
              description="Subscribe to our newsletter for regular updates about Offers, Coupons & more"
            >
              <Input
                w={"500px"}
                icon={<IconAt />}
                placeholder="Your email address"
                size="lg"
                type="email"
                name="email"
              />
            </Input.Wrapper>
            <Button mt={12} className={classes.subscribe_button} w={"200px"} size="lg">
              Subscribe
            </Button>
          </div>
        </div>
        <div className={classes.groups}>{groups}</div>
      </section>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};
