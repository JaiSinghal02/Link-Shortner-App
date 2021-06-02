import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    max-width: 315px;
    min-height: 225px;
    background-color: white;
    z-index: 20;
    ${mbBreak}{
        min-height: 140px;
    }
    `
    const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: ${props=>props.ml};
    padding-left: ${props=>props.pl};
    width: ${props=>props.width?props.width:"100%"};
    height: ${props=>props.height};
    position: ${props=>props.pos};
    border-radius: 2px;
    &.cd-box-3{
        box-sizing: border-box;
        padding: 0 20px;
        padding-top: 15px;
        justify-content: flex-start;
    }
    &.cd-box-4{
        box-sizing: border-box;
        justify-content: flex-start;
        padding-top: 15px;
    }
    ${`@media(max-width: 500px)`}{
        &.cd-box-3{
            padding: 0 5px;
        }
    }
    `
    const TextBox= styled.p`
    width: ${props=> props.width};
    max-width: ${props=>props.mw};
    margin-bottom: ${props=> props.mb};
    font-size: ${props=>props.fs};
    font-weight: ${props=>props.fw};
    color: ${props=>props.color};
    text-align: left;
    ${mbBreak}{
        text-align: center;
        &.card-head{
            font-size: 13px;
        }
        &.card-content{
            font-size: 9px;
        }
    }
    `
    const ImageBox=styled.div`
    width: calc(40px + 2vw);
    height: calc(40px + 2vw);
    background-color: ${theme.colors.Primary['Dark Violet']};
    border-radius: 50%;
    position: absolute;
    top: -35px;
    left: 10px;
    ${mbBreak}{
        left: 40%;
    }
    `
    const Image=styled.img`
    width: 60%;
    height: 51%;
    top: ${props=>(props.card2?"24%":(props.card3?"25%":"20%"))};
    left: ${props=>props.card2?"20%":(props.card3?"18%":"18%")};
    position: absolute;
    `
export default function Card(props){
    
    return(
        <Container>
            <Box width="95%" height="95%">
                <Box height="8%" pos="relative">
                    <ImageBox>
                        <Image src={props.image} alt={props.head} card2={props.card2} card3={props.card3} />
                    </ImageBox>
                </Box>
                <Box height="90%" className="cd-box-3">
                    <Box height="90%" className="cd-box-4">
                        <TextBox width="100%" fs="calc(5px + 1vw)" mb="0" fw="800" color={theme.colors.Primary['Dark Violet']} className="card-head">{props.head}</TextBox>
                        <TextBox width="100%" fs="calc(5px + 0.6vw)" mb="0" color={theme.colors.Neutral.Gray} className="card-content">{props.content}</TextBox>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}