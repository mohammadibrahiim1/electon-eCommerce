import { Text, createStyles } from "@mantine/core";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 60,
  strokeWidth: 2,
};

const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="">{dimension}</div>
    </div>
  );
};

const useStyles = createStyles(() => ({
  //   countDown_container: {
  //     display: "flex",
  //     alignItems: "center",
  //     alignContent: "center",
  //     gap: "2px",
  //   },
}));

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

const CountDownCircle = () => {
  const { classes } = useStyles();
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + 604800; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div>
      <section>
        <div className="flex  justify-center  gap-2 pb-[352px] pt-16">
          <CountdownCircleTimer
            {...timerProps}
            colors="#364FC7"
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime, color }) => (
              <Text c={"#FFF4E6 !important"} align="center" fz={13} fw={700} style={{ color }}>
                {renderTime("DAYS", getTimeDays(daysDuration - elapsedTime))}
              </Text>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#1864AB"
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <Text c={"#FFF4E6 !important"} align="center" fz={13} fw={700} style={{ color }}>
                {renderTime("HRS", getTimeHours(daySeconds - elapsedTime))}
              </Text>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#0B7285"
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
            })}
          >
            {({ elapsedTime, color }) => (
              <Text c={"#FFF4E6 !important"} align="center" fz={13} fw={700} style={{ color }}>
                {renderTime("MIN", getTimeMinutes(hourSeconds - elapsedTime))}
              </Text>
            )}
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors="#C92A2A"
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => ({
              shouldRepeat: remainingTime - totalElapsedTime > 0,
            })}
          >
            {({ elapsedTime, color }) => (
              <Text c={"#FFF4E6 !important"} align="center" fz={13} fw={700} style={{ color }}>
                {renderTime("SEC", getTimeSeconds(elapsedTime))}
              </Text>
            )}
          </CountdownCircleTimer>
        </div>
      </section>
    </div>
  );
};

export default CountDownCircle;
