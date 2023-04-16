import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import NickNameComponent from '../subComponents/NickNameComponent'
import SocialIcons from '../subComponents/SocialIcons'
import LogoButton from '../subComponents/LogoButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'
import motto from '../assets/images/motto.png'

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height:100vh;
    position: relative;
    overflow: hidden;
`
const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`
const Motto = styled.div`
    position: absolute;
    top: 50%;
    right: 5%;
    width: 30vw;
    animation: ${float} 4s ease infinite;
    img{
        width: 100%;
        height: auto;
    }
`
const Main =  styled.div`
    border: 2px solid ${(props) => props.theme.text};
    color: ${(props) => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);
    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;
    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <NickNameComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <LogoButton />
                <ParticleComponent theme='dark' />
                <Motto>
                    <img src={motto} alt="motto" />
                </Motto>    
                <Main>
                    I'm April, a passionate and skilled makeup artist with 10 years of experience in the industry.
                    <br /> <br/>
                    My goal is to help my clients feel their best selves and achieve their desired looks, whether it's a natural glow or a bold statement.
                    <br/> <br/>
                    I have had the pleasure of working with a diverse range of clients, from brides and models to celebrities and everyday people. I am grateful for the trust and satisfaction of my clients, and I always strive to exceed their expectations. 
                </Main>
                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>  
    )
}

export default AboutPage

