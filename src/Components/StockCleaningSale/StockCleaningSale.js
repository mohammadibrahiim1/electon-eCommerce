import { BackgroundImage, Box, Grid, Text, createStyles, getStylesRef, rem } from "@mantine/core";
// import { AlignLeftControl } from "@mantine/tiptap/lib/controls";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountDownCircle from "../CountDownCircle/CountDownCircle";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderTop: "1px solid #F1F3F5",
    borderLeft: "1px solid #F1F3F5",
    height: "237px",
    overflow: "hidden",

    [`&:hover .${getStylesRef("product_img")}`]: {
      transform: "scale(1.08)",
    },

    "&:hover": {
      boxShadow: "0  5px 6px 0 #DCDCDF",
      transition: " 0.5s",
      transform: "scale(1.01)",
    },

    [`&:hover .${getStylesRef("hover_text")}`]: {
      position: "relative",
      bottom: "30px",
      transition: "0.5s",
    },
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
  },

  container: {
    maxWidth: "1400px",
    margin: "auto",
  },
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #F1F3F5",
    borderRight: "1px solid #F1F3F5",
    position: "relative",
    zIndex: 1,
  },
  product_img: {
    width: "140px",
    height: "140px",
    margin: "auto",
    padding: "30px",
    marginTop: "15px",
    ref: getStylesRef("product_img"),
    backgroundSize: "cover",
    transition: "transform 500ms ease",
  },

  hover_text: {
    ref: getStylesRef("hover_text"),
    transition: "0.5s",
  },
}));

const StockCleaningSale = () => {
  const { classes } = useStyles();
  const [scsell, setScsell] = useState([]);
  useEffect(() => {
    fetch("scs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setScsell(data);
      });
  }, []);

  return (
    <div>
      <section className={classes.container}>
        {scsell.length}
        {/* scs section header  */}
        <div className="flex justify-between items-center gap-5">
          <Text
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan", deg: 45 }}
            sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            ta="center"
            fz="xl"
            fw={700}
          >
            Flash Sale
          </Text>
          <div className="flex items-center gap-5">
            <Text
              component="a"
              href="/"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz="sm"
              fw={700}
            >
              view all flash sell
            </Text>

            <Text
              component="a"
              href="/"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
              ta="center"
              fz="sm"
              fw={700}
            >
              view all Products from this flash sale
            </Text>
          </div>
        </div>
        {/* scs products */}

        <div>
          <Grid grow gutter="lg">
            <Grid.Col span={4} h={475} w={437}>
              <Box>
                <BackgroundImage
                  src="https://demo.activeitzone.com/ecommerce/public/uploads/all/SLPVFkT5hIcmqUoQuCTanzBpWjP9QZWGcAeVV0oE.png"
                  radius="sm"
                >
                  {/* <Text color="#fff">
                    BackgroundImage component can be used to add any content on image. It is useful for hero headers and
                    other similar sections
                  </Text> */}
                  <CountDownCircle></CountDownCircle>
                </BackgroundImage>
              </Box>
            </Grid.Col>
            <Grid.Col span={8}>
              {" "}
              <div className={classes.card_container}>
                {scsell.slice(0, 10).map((product) => (
                  <>
                    {/* <div className={classes.card_border}> */}
                    <Link to="/cart">
                      <div className={classes.card}>
                        <img className={classes.product_img} src={product.image} alt={product.name} />

                        <div className={classes.hover_text}>
                          <Text fz="md" c={"#D00906"} pt={50} fw={700} align="center">
                            ${product.discount_price}
                          </Text>
                          <Text fz="md" pb={15} c={"#C1C2C5"} fw={700} align="center" td="line-through">
                            {product.price}
                          </Text>
                        </div>
                      </div>
                    </Link>

                    {/* </div> */}
                  </>
                ))}
              </div>{" "}
            </Grid.Col>
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default StockCleaningSale;
