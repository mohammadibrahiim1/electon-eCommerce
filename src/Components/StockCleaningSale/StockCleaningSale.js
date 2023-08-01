import { BackgroundImage, Box, Grid, Text, createStyles, rem } from "@mantine/core";
// import { AlignLeftControl } from "@mantine/tiptap/lib/controls";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    borderTop: "1px solid #F1F3F5",
    borderLeft: "1px solid #F1F3F5",
    "&:hover": {
      boxShadow:
        " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      transition: "0.3s",
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
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #F1F3F5",
    borderRight: "1px solid #F1F3F5",
  },
  product_img: {
    width: "100px",
    height: "100px",
    margin: "auto",
    padding: "15px",
    marginTop: "40px",
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
            <Grid.Col span={4} h={475} w={435}>
              <Box>
                <BackgroundImage
                  src="https://demo.activeitzone.com/ecommerce/public/uploads/all/SLPVFkT5hIcmqUoQuCTanzBpWjP9QZWGcAeVV0oE.png"
                  radius="sm"
                >
                  <Text color="#fff">
                    BackgroundImage component can be used to add any content on image. It is useful for hero headers and
                    other similar sections
                  </Text>
                </BackgroundImage>
              </Box>
            </Grid.Col>
            <Grid.Col span={8}>
              {" "}
              <div className={classes.card_container}>
                {scsell.map((product) => (
                  <>
                    {/* <div className={classes.card_border}> */}
                    <Link to="/cart">
                      <div className={classes.card}>
                        <img className={classes.product_img} src={product.image} alt={product.name} />

                        <div>
                          <Text fz="md" c={"#D00906"} pt={75} pb={15} fw={700} align="center">
                            $168.00
                          </Text>
                        </div>

                        {/* <Button radius="xl" style={{ flex: 1 }}>
                            Rent now
                          </Button> */}
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
