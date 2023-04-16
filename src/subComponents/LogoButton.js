// Logo-Home button
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { HomeBtn } from '../components/Images'

const Logo = styled.button`
    position: fixed;
    top: 2.5rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: transparent;
    padding: 0.3rem;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    z-index:3;
    cursor: pointer;
    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }
`

const LogoButton = () => {
    return (
        <Logo>
            <NavLink to="/">
                <HomeBtn width={100} height={100} fill='currentColor' />
            </NavLink>
        </Logo>
    )
}

export default LogoButton