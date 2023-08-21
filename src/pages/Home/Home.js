import React from "react";
import { useGetProductQuery } from "../../features/apiSlice";
import { Container, Loader, Text } from "@mantine/core";

const Home = () => {
  const { data, isLoading, isError } = useGetProductQuery();
  const products = data;

  if (isLoading) {
    return (
      <Container size={"lg"}>
        <Loader color="red" variant="bars"></Loader>
      </Container>
    );
  }

  if (isError) {
    return <Text c={"red"}> something went wrong </Text>;
  }

  return (
    <div>
      <Container size={"lg"}>
        <Text> products data {products?.length} </Text>
      </Container>
    </div>
  );
};

export default Home;
