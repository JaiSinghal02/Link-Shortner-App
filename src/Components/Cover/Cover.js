import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'
import Button from '../ThemedComponents/Button'


export default function Cover(props){
    const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;
    width: 100%;
    height: 450px;
    `
    const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 120px;
    ${`@media(max-width: 630px)`}{
        margin-left: 30px;
    }
    ${mbBreak}{
        flex-direction: column-reverse;
        margin-left: 10px;
    }
    `
    const ElementBox=styled.div`
    display:flex;
    flex-direction: column;
    &.cov-box-1{
        width:69%;
        padding-left: 10px;
    }
    &.cov-taghead-cont{
        width: 94%;
    }
    &.cov-tagline-cont{
        width: 73%;
    }
    &.cov-btn-cont{
        width: 100%;
        max-width: 150px;
        margin-left: -2px;
        height: 40px;
        font-size: 14px;
    }
    &.cov-btn-cont :hover{
        cursor: pointer;
    }
    ${`@media(max-width: 580px)`}{
        &.cov-box-1{
            margin-right:10px;
        }
        &.cov-box-2{
            margin-left: 10px;
        }
    }
    ${mbBreak}{
        &.cov-box-1{
            width:100%;
            height: 200px;
        }
        &.cov-box-2{
            width: 100%;
            margin-left: 0px;
        }  
        &.cov-tag-box{
            align-items:center;
        } 
        &.cov-btn-box{
            align-items: center;

        }
        &.cov-taghead-cont{
            width: 90%;
        }
        &.cov-tagline-cont{
            width:69%;
        }
    }
    `
    const CoverTag=styled.p`
    font-size: calc(25px + 3vw);
    font-weight: 10px;
    color: ${theme.colors.Primary['Dark Violet']};
    margin-bottom: 0;
    text-align: left;
    ${mbBreak}{
        text-align: center;  
        width: 90%;
    }
    `
    const CoverLine=styled.p`
    font-size: calc(4px + 1vw);
    color: ${theme.colors.Neutral.Gray};
    margin-top: 0;
    margin-bottom: 15px;
    text-align: left;
    ${mbBreak}{
        text-align: center;  
        width: 95%;
        font-size: 13px;
    }
    `
    const Image=styled.img`
    width: 123%;
    height: 420px;
    ${mbBreak}{
        width: 110%;
        height: 250px;   
    }
    `
    return(
        <Container>
            <Box>
                <ElementBox className="cov-box-1">
                    <ElementBox className="cov-tag-box">
                        <ElementBox className="cov-taghead-cont">
                            <CoverTag>More than just shorter links</CoverTag>
                        </ElementBox>
                        <ElementBox className="cov-tagline-cont">
                            <CoverLine>Build your brand's recognition and get detailed insights on how your links are performing.</CoverLine>
                        </ElementBox>
                    </ElementBox>
                    <ElementBox className="cov-btn-box">
                        <ElementBox className="cov-btn-cont"><Button light borderRadius="15px">Get Started</Button></ElementBox>
                    </ElementBox>
                </ElementBox>
                
                <ElementBox className="cov-box-2"><Image src={'./assets/images/cover.svg'} alt="cover" /></ElementBox>
            </Box>
        </Container>
    )
}