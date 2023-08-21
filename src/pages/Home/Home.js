import React from "react";
import { useGetProductQuery } from "../../features/apiSlice";
import { Container, Loader, Text } from "@mantine/core";
import { toast } from "react-hot-toast";

const Home = () => {
  const { data, isLoading, isError, isSuccess } = useGetProductQuery();
  const products = data;

  if (isLoading) {
    return (
      <Container size={"lg"}>
        <Loader color="red" variant="bars"></Loader>
      </Container>
    );
  }

  // if (isSuccess) {
  //   return toast.success("data loaded successfully");
  // }

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
