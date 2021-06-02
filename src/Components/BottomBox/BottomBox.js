import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'
import Button from '../ThemedComponents/Button'

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 180px;
    background: url("./assets/images/bg-boost-desktop.jpg");
    background-size: 100% 180px;
    background-repeat: no-repeat;
    ${mbBreak}{
        background: url("./assets/images/bg-boost-mobile.jpg");
        background-size: 100% 180px;
        background-repeat: no-repeat;
    }
    `
    const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: ${props=>props.width};
    height: ${props=>props.height};
    max-width: ${props=>props.mw};
    min-width: ${props=>props.miw};
    font-size: ${props=>props.fs};
    `
    const Text = styled.p`
    text-align: center;
    height: 40px;
    font-size: ${props=>props.fs};
    margin-top: 10px;
    color: white;
    ${mbBreak}{
        margin-bottom: 2px;
    }
    `
export default function Cover(props){
    
    return(
        <Container>
            <Box>
                <Text fs="calc(20px + 1vw)">Boost your links today</Text>
                <Box width="25%" height="45px" mw="186px" miw="110px" fs="calc(10px + 1vw)">
                    <Button light borderRadius="18px">Get Started</Button>
                </Box>
            </Box>
        </Container>
    )
}