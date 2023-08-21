import React from "react";
import { useGetProductQuery } from "../../features/apiSlice";
import { Container, Loader, LoadingOverlay, Text } from "@mantine/core";

const Home = () => {
  const { data, isLoading, isError, error, isSuccess } = useGetProductQuery();
  const products = data;

  if (isLoading) {
    return (
      <Container size={"lg"}>
        <Loader color="red" variant="bars"></Loader>
      </Container>
    );
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
