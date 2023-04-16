import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes'
import NickNameComponent from '../subComponents/NickNameComponent'
import SocialIcons from '../subComponents/SocialIcons'
import LogoButton from '../subComponents/LogoButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height:100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    margin-top: 4rem;
    padding: 1rem;
    width: 60vw;
    height: 60vh;
    z-index:3;
    line-height: 1.5;
    cursor: pointer;
    font-family: 'Ubuntu Mono',monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);
    margin-bottom: -40px;
    ${Main}:hover &{
        &>*{
            fill:${props => props.theme.body};
        }
    }
    &>*:first-child{
    margin-right: 1rem;
}
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw);
    ${Main}:hover &{
    
            color:${props => props.theme.body};
        
    }
    strong{
        margin-bottom: -40px;
        text-transform: uppercase;
    }
    ul,p{
        margin-left: 2rem;
    }
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>
                <NickNameComponent theme='light'/>
                <SocialIcons theme='light'/>
                <LogoButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        Artist
                    </Title>
                    <Description>
                        I love to create design which speaks, Keep it clean, minimal and simple.
                    </Description>
                    <Description>
                        <strong>I'm a</strong>
                        <ul>
                            <li>
                                Makeup Application
                            </li>
                            <li>
                                Skincare Expertise
                            </li>
                        </ul>
                    </Description>
                    <Description>
                    <strong>Knowledge</strong>
                    <ul>
                        <li>
                            Color Theory Knowledge
                        </li>  
                    </ul>
                    </Description>
                </Main>
                    <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>  
    )
}

export default MySkillsPage