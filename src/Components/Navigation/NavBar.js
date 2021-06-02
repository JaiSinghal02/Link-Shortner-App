import React,{useState} from 'react';
import theme from '../../theme'
import styled from 'styled-components'
import Button from '../ThemedComponents/Button'

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    width: 100%;
    position: absolute;
    top: 35px;
    font-size: 0.9em;
    
    `
    const Box = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    &.nav-box-1{
        width:50%;
        justify-content: unset;
    }
    &.nav-box-2{
        width: 25%;
        justify-content: flex-end;
        justify-content: unset;
    }
    &.nav-long-box-cont{
        justify-content: unset;
        width:80%;
    }
    ${mbBreak}{
        &.nav-box-1,&.nav-box-2{
            display: none;
        }
        &.nav-long-box-cont{
            width:50%;
            margin-left: 20px;
        }
        
    }
    `
    const NavElement= styled.div`
    width: 40%;
    max-width: 90px;
    font-weight: ${theme.typography.Fonts.Weights[1]};
    font-size: 14px;
    color: ${theme.colors.Neutral.Gray};
    &.nav-long-box-el{
        max-width: 80px;
        padding-top: 2px;
    }
    &.nav-short-box-btn-cont{
        width:80%;
        max-width:105px;
    }
    &.nav-image-box{
        width:40%;
        min-width:90px;
        max-width: 230px;
        margin-right: 15px;
        display:flex;
        justify-content: flex-end;
    }
    &.nav-sideBar-cont{
        display:none;
        width: 40px;
        padding-right: 15px;
        height: 26px;
    }
    &.nav-short-box-btn-cont :hover{
        cursor:pointer;
    }
    &:hover{
        cursor: pointer;
        color: ${theme.colors.Primary['Dark Violet']}
    }
    ${`@media(max-width: 550px)`}{
        &.nav-long-box-el{
            font-size: 10px;
            max-width: 50px;
        }
        &.nav-short-box-btn-cont{
            font-size: 11px;
        }
        &.nav-image-box{
            width: 32%;
        }
    }
    ${mbBreak}{
        &.nav-sideBar-cont{
            display:block;
        }
    }
    `
    const Image=styled.img`
    width: 100%;
    max-width: 90px;
    &.nav-side-img{
        width:27px;
        height: 26px;
    }
    &.nav-side-img:hover{
        cursor: pointer;
    }
    `
export default function NavBar(props){
    
    return(
        <Container>
            <Box>
                <Box className="nav-long-box-cont">
                <NavElement className="nav-image-box"><Image src={'./assets/images/logo.svg'} alt="logo"/></NavElement>
                    <Box className="nav-box-1">
                        
                        <NavElement className="nav-long-box-el">Feature</NavElement>
                        <NavElement className="nav-long-box-el">Pricing</NavElement>
                        <NavElement className="nav-long-box-el">Resources</NavElement>
                    </Box>
                </Box>
                <Box className="nav-box-2">
                    <NavElement className="nav-long-box-el">Log in</NavElement>
                    <NavElement className="nav-short-box-btn-cont"><Button light borderRadius="17px">Sign up</Button></NavElement>
                </Box>
            <NavElement className="nav-sideBar-cont"><Image 
            className="nav-side-img" 
            src={'./assets/images/hamburger.png'} 
            alt="side-drawer"
            onClick={props.showModal}/></NavElement>
            </Box>
        </Container>

    )
}