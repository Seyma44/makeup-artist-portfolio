import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes"
import { motion } from "framer-motion"
import NickNameComponent from "../subComponents/NickNameComponent"
import SocialIcons from "../subComponents/SocialIcons"
import LogoButton from "../subComponents/LogoButton"
import { Work } from "../data/WorkData"
import Card from "../subComponents/Card"
import { Mainicon } from "./Images"
import BigTitle from "../subComponents/BigTitle"

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`

const Blink = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  const mainicon = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const blink = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (mainicon.current.style.transform =
        "blink(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", blink);
    return () => {
      window.removeEventListener("scroll", blink);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <NickNameComponent theme="dark" />
        <SocialIcons theme="dark" />
        <LogoButton />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Blink ref={mainicon}>
          <Mainicon width={80} height={80} fill={DarkTheme.text} />
        </Blink>
        <BigTitle text="WORK" top="20%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;