import React from "react";
import { useGetProductQuery } from "../../features/apiSlice";
import { Container, Grid, Loader } from "@mantine/core";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import DisplayCategories from "../../Components/DisplayCategories/DisplayCategories";

const Home = () => {
  const { data, isLoading, isError } = useGetProductQuery();
  const products = data?.products;
  console.log(products);

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
            <HomeSlider></HomeSlider>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
