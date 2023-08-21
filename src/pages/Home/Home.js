import React from "react";
import { useGetProductQuery } from "../../features/apiSlice";
import { Container, Grid, Loader, SimpleGrid, Text } from "@mantine/core";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import DisplayCategories from "../../Components/DisplayCategories/DisplayCategories";

const Home = () => {
  const { data, isLoading, isError } = useGetProductQuery();
  const products = data?.products;

  if (isLoading) {
    return (
      <Container size={"lg"}>
        <Loader color="red" variant="bars"></Loader>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container align="center" size={"lg"} c={"red"}>
        something went wrong{" "}
      </Container>
    );
  }

  return (
    <div>
      <Container size={"1440px"}>
        <Grid>
          <Grid.Col span={3}>
            <DisplayCategories></DisplayCategories>
          </Grid.Col>
          <Grid.Col span={9}>
            {" "}
            <HomeSlider></HomeSlider>
          </Grid.Col>
        </Grid>
        {/* <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[
            { maxWidth: "62rem", cols: 2, spacing: "md" },
            // { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        > */}
        {/* <div>
            <DisplayCategories></DisplayCategories>
          </div>
          <div>
            <HomeSlider></HomeSlider>
          </div> */}
        {/* <div>3</div>
          <div>4</div>
          <div>5</div> */}
        {/* </SimpleGrid> */}
        {/* <div className="  justify-between items-start gap-12">
          
          
        </div>
        <Text> products data {products?.length} </Text> */}
      </Container>
    </div>
  );
};

export default Home;
