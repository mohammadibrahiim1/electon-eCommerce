import React, { useEffect, useState } from "react";
import "./Home.css";
// import { ADD_TO_CART } from "../../redux/actionTypes/actionTypes";

import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import { addToCart } from "../../redux/actionCreators/productActions";
import StockCleaningSale from "../StockCleaningSale/StockCleaningSale";
import TodaysDeal from "../TodaysDeal/TodaysDeal";

const Home = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <div>
      {/* <div>
        <p>home page {products.length} </p>

        {products.map((product) => (
          <>
            <Card shadow="sm" padding="lg" radius="md" withBorder w={320}>
              <Card.Section component="a" href="https://mantine.dev/">
                <Image src={product.thumbnail} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{product.title}</Text>
                <Badge color="pink" variant="light">
                  ${product.price}
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                {product.description}
              </Text>

              <Button
                onClick={() => dispatch(addToCart(product))}
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                add to cart
              </Button>
            </Card>
          </>
        ))}
      </div> */}
      <StockCleaningSale />
      <TodaysDeal />
    </div>
  );
};

export default Home;
