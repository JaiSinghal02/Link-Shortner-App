import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'
import Card from '../Card/Card'
import CardDetail from '../Card/CardDetail'

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    min-height: 650px;
    margin-top: 20px;
    `
    const Box = styled.div`
    display: flex;
    flex-direction: ${props=>props.fd?props.fd:"column"};
    justify-content: ${props=>props.jc?props.jc:"center"};
    align-items: center;
    position: ${props=>props.ps};
    margin-top: ${props=>props.mt};
    margin-left: ${props=>props.ml};
    margin-bottom: ${props=> props.mb};
    padding-left: ${props=>props.pl};
    width: ${props=>props.width?props.width:"100%"};
    height: ${props=>props.height};
    border-radius: 8px;
    background-color: ${props=>props.bc};
    &.ft-card-2{
        padding-top:90px;
    }
    &.ft-card-3{
        padding-top:180px;
    }
    ${mbBreak}{
        &.ft-card-cont{
            flex-direction: column;
        }
        &.ft-head-box{
            margin-bottom: 40px;
        }
        &.ft-card-1,&.ft-card-2,&.ft-card-3{
            width: 90%;
            height: 200px;
        }
        &.ft-card-2,&.ft-card-3{
            padding-top:0;
        }
        &.ft-card-line{
            margin-top: 10px;
            margin-left: 0%;
            width: 2%;
            height: 383px;
        }
    }
    `
    const TextBox= styled.p`
    width: ${props=> props.width};
    max-width: ${props=>props.mw};
    margin-bottom: ${props=> props.mb};
    font-size: ${props=>props.fs};
    color: ${props=>props.color};

    `
export default function Feature(props){
    
    const cards=[]
    CardDetail.forEach((card,index)=>{
        cards.push(
            <Card head={card.head} content={card.content} image={card.image} key={index} card2={index===1} card3={index===2}></Card>
        )
    })
    return(
        <Container>
            <Box width="90%" height="95%">
                <Box height="20%" mt="30px" className="ft-head-box">
                    <Box height="100%">
                        <TextBox fs="30px"  mb="0" color={theme.colors.Primary['Dark Violet']}>Advanced Statistics</TextBox>
                        <TextBox width="50%" mw="419px" fs="14px" color={theme.colors.Neutral.Gray}>Track how your links are performing across the web with our 
                        advanced statistics dashbaord</TextBox>
                    </Box>
                    
                </Box>
                <Box width="83%" height="80%" fd="row" jc="space-evenly" className="ft-card-cont">
                    <Box width="30%" height="100%" jc="flex-start" className="ft-card-1">
                        {cards[0]}
                    </Box>
                    <Box width="30%" height="100%"  jc="flex-start" className="ft-card-2">
                        {cards[1]}
                    </Box>
                    <Box width="30%" height="100%"  jc="flex-start" className="ft-card-3">
                        {cards[2]}
                    </Box>
                    <Box width="60%" height="10px" bc={theme.colors.Primary.Cyan} className="ft-card-line"  ps="absolute" mt="3%"></Box>
                    
                </Box>
            </Box>
        </Container>
    )
}