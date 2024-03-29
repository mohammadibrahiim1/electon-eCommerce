import { createStyles, Text, Container, ActionIcon, Group, rem, Image, Input, Button } from "@mantine/core";
import { IconBrandYoutube, IconBrandInstagram, IconAt } from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: "#212129",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

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
    fontWeight: "700",
    position: "relative",
    textDecoration: " none",
    display: "block",
    color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[0],
    fontSize: theme.fontSizes.xs,
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
    maxWidth: "1400px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: theme.spacing.xl,
    // paddingTop: theme.spacing.xl,
    // paddingBottom: theme.spacing.xl,
    // borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]}`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  subscribe_button: {
    backgroundColor: "#D43533 !important",
    border: "1px solid #D43533 ",
    borderRadius: 0,
  },

  socialIcon: {
    backgroundColor: "#212129 !important",
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
    "&:hover": {
      color: "#FFF",
      transition: "0.5s",
    },
  },

  footer_bottom: {
    // backgroundColor: "#17171F",
    width: "1400px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const dataOne = [
  {
    links: [
      { label: "Support Policy Page", link: "/support" },
      { label: "Return Policy Page", link: "/returnPolicy" },
      { label: "About Us", link: "/about" },
      { label: "Privacy Policy Page", link: "/privacy&policy" },
      { label: "Seller Policy", link: "/sellerPolicy" },
      { label: "Term Condition Page", link: "/term&condition" },
    ],
  },
];
const dataTwo = [
  {
    links: [{ label: "Demo Address" }, { label: "+88 125463112" }, { label: "demo.example@gmail.com" }],
  },
];
const dataThree = [
  {
    links: [
      { label: "Logout", link: "/logout" },
      { label: "Order History", link: "/orderHistory" },
      { label: "My Wishlist", link: "/myWishlist" },
      { label: "Track Order", link: "/trackOrder" },
      { label: "Be an affiliate partner", link: "/affiliate partner" },
    ],
  },
];
const dataFour = [
  {
    links: [
      {
        label: "Become a Seller-apply now",
        link: "/applyNow",
      },

      { label: "Download Seller App", link: "/sellerApp" },
      { label: "Download Delivery Boy App", link: "/deliveryBoyApp" },
    ],
  },
];

export const Footer = () => {
  const { classes } = useStyles();

  const groupsOne = dataOne.map((group) => {
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
  const groupsTwo = dataTwo.map((group) => {
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
  const groupsThree = dataThree.map((group) => {
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
  const groupsFour = dataFour.map((group) => {
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
    <>
      <footer className={classes.footer}>
        <section className={classes.inner}>
          <div>
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

            <div className="w-[700px] flex items-center justify-between gap-3 mt-5">
              <Input.Wrapper
                description={
                  <Text size={"sm"} c={"#FFF"}>
                    Subscribe to our newsletter for regular updates about Offers, Coupons & more
                  </Text>
                }
              >
                <Input
                  w={"500px"}
                  icon={<IconAt />}
                  placeholder="Your email address"
                  size="md"
                  type="email"
                  name="email"
                  radius={0}
                />
              </Input.Wrapper>
              <Button mt={22} className={classes.subscribe_button} w={"200px"} size="md">
                Subscribe
              </Button>
            </div>
          </div>

          <div>
            <div>
              <Text c={"#919199"} size={"lg"} fw={700}>
                Follow Us
              </Text>
              <Group>
                <ActionIcon className={classes.socialIcon} size="lg">
                  <FaFacebookF size="1.4rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon className={classes.socialIcon} size="lg">
                  <FaTwitter size="1.5rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon className={classes.socialIcon} size="lg">
                  <IconBrandYoutube size="2rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon className={classes.socialIcon} size="lg">
                  <IconBrandInstagram size="2.5rem" stroke={1.5} />
                </ActionIcon>
                <ActionIcon className={classes.socialIcon} size="lg">
                  <FaLinkedinIn size="1.6rem" stroke={1.5} />
                </ActionIcon>
              </Group>
            </div>
            <div className="mt-3">
              <Text c={"#919199"} size={"lg"} fw={700}>
                Mobile Apps
              </Text>

              <div className="flex items-center gap-3 mt-3">
                <Image
                  component="a"
                  href="https://play.google.com/store/apps"
                  width={148}
                  height={44}
                  fit="contain"
                  src="https://i.ibb.co/XS6kJ1Q/app.png"
                />
                <Image
                  component="a"
                  href="https://play.google.com/store/apps"
                  width={148}
                  height={44}
                  fit="contain"
                  src="https://i.ibb.co/mbrRXDf/play.png "
                />
              </div>
            </div>
          </div>
        </section>
        <hr className="my-12" />
        <Container className={classes.afterFooter}>
          <div className={classes.groups}>{groupsOne}</div>
          <div className={classes.groups}>{groupsTwo}</div>
          <div className={classes.groups}>{groupsThree}</div>
          <div className={classes.groups}>{groupsFour}</div>
        </Container>
      </footer>
      <div className="bg-[#17171F] py-12">
        <div className={classes.footer_bottom}>
          <Text color="#FFF" size="md">
            © Active eCommerce CMS 2021
          </Text>

          <Image
            width={144}
            height={20}
            src="https://i.ibb.co/5Y62rmL/Nank-P5em-HOKcd-CWq-X6-Bks1-Qa63i-Dgo-LA6-WPGn7oe.png"
          />
        </div>
      </div>
    </>
  );
};
