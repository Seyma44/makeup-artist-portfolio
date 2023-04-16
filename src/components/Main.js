import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoButton from '../subComponents/LogoButton'
import SocialIcons from '../subComponents/SocialIcons'
import { Mainicon } from './Images'
import Intro from './Intro'
import ParticleComponent from '../subComponents/ParticleComponent'

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;
    font-size:25px;
    span{
        font-family: 'Dancing Script', cursive;
        color:#98989696;
        font-size: 20px;
    }
    h2,h3,h4,h5,h6{
    font-family: 'Caveat', cursive;
    font-weight:700;
    }
`

const Container = styled.div`
    padding: 2rem;
`

const Contact = styled.a`
    color: ${props => props.theme.text};
    position: absolute;
    top: 16%;
    right: calc(1rem + .1vw);
    transform: rotate(45deg) translate(-50%, -50%);
    text-decoration: none;
    z-index:1;
`

const BLOG = styled(NavLink)`
    color: ${props => props.theme.text};
    position: absolute;
    top: 57%;
    right: calc(1rem + 2vw);
    transform: rotate(90deg) translate(-50%, -50%);
    text-decoration: none;
    font-family:'Karla', sans-serif ;
    font-weight:500;
    z-index:1;
`

const WORK = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    top: 5%;
    left: calc(3rem + 3vw);
    transform: rotate(315deg) translate(-50%, -50%);
    text-decoration: none;
    z-index:1;
`

const BottomBar = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
    color: ${props => props.click ? props.theme.body : props.theme.text};
    text-decoration: none;
    z-index:1;
`

const SKILLS = styled(NavLink)`
    color: ${props => props.theme.text};
    text-decoration: none;
    z-index:1;
`

const blink = keyframes`
  0%    { opacity: 0; }
  20%   { opacity: 1; }
  80%   { opacity: 0; }
  100%  { opacity: 1; }
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' :'50%'  };
    left: ${props => props.click ? '92%' :'50%'  };
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 1s ease;
    z-index: 100;

    &>:first-child{
        animation: ${blink} infinite 1.5s linear;
        padding-top: 2rem;
    }

    &>:last-child{
        display: ${props => props.click ? 'none' :'inline-block'  };
    }
`

const DarkDiv = styled.div`
    position: absolute;
    top: 0;
    background-color: #000;
    bottom: 0;
    right: 50%;
    width: ${props => props.click ? '50%' : '0%'};
    height: ${props => props.click ? '100%' : '0%'};
    z-index:1;
    transition: height 0.5s ease, width 1s ease 0.5s;
`

const Main = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <DarkDiv   click={click}/>
                <Container>
                    <LogoButton />
                    <ParticleComponent theme='dark' />
                    <SocialIcons theme={click ? 'dark' :'light'} />
                    <Center click={click}>
                        <Mainicon onClick={()=> handleClick()} width={click ? 120 : 400} height={click ? 120 : 400} fill='currentColor' /> 
                        <span style={{position: "absolute", top: "38%", left: "50%", transform: "translate(-50%, -50%)", backgroundSize: "cover", padding: "10px 20px", zIndex:"-9999"}}>Click here</span>
                    </Center>
                    <Contact target="_blank" href="mailto:seyma_sandikci@hotmail.com">
                        <motion.h2
                        initial={{
                            y:-200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}} 
                        >
                            Say hi..
                        </motion.h2>
                    </Contact>
                    <BLOG to="/blog">
                        <motion.h2
                        initial={{
                            y:-200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            Blog
                        </motion.h2>
                    </BLOG>
                    <WORK to="/work" click={+click}>
                        <motion.h2
                        initial={{
                            y:-200,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        animate={{
                            y:0,
                            transition: { type:'spring', duration: 1.5, delay:1}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >
                            My Works
                        </motion.h2>
                    </WORK>
                    <BottomBar>
                        <ABOUT to="/about" click={+click}>
                            <motion.h2
                            initial={{
                                y:200,
                                transition: { type:'spring', duration: 1.5, delay:1}
                            }}
                            animate={{
                                y:0,
                                transition: { type:'spring', duration: 1.5, delay:1}
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            >
                                About
                            </motion.h2>
                        </ABOUT>
                        <SKILLS to="/skills">
                            <motion.h2
                            initial={{
                                y:200,
                                transition: { type:'spring', duration: 1.5, delay:1}
                            }}
                            animate={{
                                y:0,
                                transition: { type:'spring', duration: 1.5, delay:1}
                            }}
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            >
                                My Skills
                            </motion.h2>
                         </SKILLS>
                    </BottomBar>
                </Container>
                {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main