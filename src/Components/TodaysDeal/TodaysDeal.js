import { Text, createStyles } from "@mantine/core";
import React from "react";
const useStyles = createStyles(() => ({
  todays_deal_container: {
    width: "1400px",
    margin: "auto",
  },
}));
const TodaysDeal = () => {
  const { classes } = useStyles();
  return (
    <div>
      <section className={classes.todays_deal_container}>
        <div>
          <Text>todays deal</Text>
        </div>
      </section>
    </div>
  );
};

export default TodaysDeal;
