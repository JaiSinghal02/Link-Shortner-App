import React,{useEffect} from 'react';
import theme from '../../theme'
import styled from 'styled-components'
import Button from '../ThemedComponents/Button'
// import logo from './assets/images'


export default function NavModal(props){
    const Container=styled.div`
    position:absolute;
    z-index: 10;
    top: 100px;
    width: 100%;
    height: 260px;
    display:flex;
    justify-content: center;
    `
    const Box = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.Primary['Dark Violet']};
    border-radius: 8px;
    padding: 25px 0px;
    &.nav-mod-box{
        width:50%;
        justify-content: unset;
    }
    `
    const NavElement= styled.div`
    width: 80%;
    height: 30px;
    font-weight: ${theme.typography.Fonts.Weights[1]};
    font-size: 16px;
    color: white;
    &.nav-modal-btn-box{
        width: 80%;
    }
    &:hover{
        cursor: pointer;
    }
    &.nav-modal-line-box:hover{
        cursor: auto;
    }
    `
    const Line=styled.hr`
    border:none;
    height: 0.5px;
    background-color: ${theme.colors.Neutral.Gray};
    `
    const node=React.createRef();
    useEffect(()=>{
        document.addEventListener('mousedown',handleClick,false)
        return()=>{
            document.removeEventListener('mousedown',handleClick,false) //When component unmounts
        }
    })
    //To close modal when clicked anywhere else
    const handleClick = (e)=>{
        if(!node.current.contains(e.target)){
            props.showModal();
        }
    }
    return(
        <Container ref={node}>
            <Box>
            <NavElement>Features</NavElement>
            <NavElement>Pricing</NavElement>
            <NavElement>Resources</NavElement>
            <NavElement className="nav-modal-line-box"><Line></Line></NavElement>
            <NavElement>Log in</NavElement>
            <NavElement className="nav-modal-btn-box"><Button light borderRadius="17px">Sign up</Button></NavElement>
            </Box>
        </Container>

    )
}