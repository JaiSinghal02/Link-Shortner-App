import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'
import Button from '../ThemedComponents/Button'

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80px;
    padding: 10px 0;
    background-color: #f0f1f6;
    `
    const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${props=>props.ml};
    padding-left: ${props=>props.pl};
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: 3px;
    &.lb-box-1{
        justify-content: flex-start;
    }
    &.lb-box-2{
        background-color: white;
    }
    &.lb-box-3{
        justify-content: space-between;
    }
    &.lb-box-4{
        justify-content: center;
    }
    &.lb-box-5{
        font-size: calc(5px + 0.5vw);
        max-width: 100px;
    }
    &.lb-link-box-1{
        justify-content: flex-start;
        padding-left: 15px;
    }
    &.lb-link-box-2{
        justify-content: flex-end;
    }
    ${`@media(max-width: 630px)`}{
        &.lb-box-1{
            margin-left: 30px;
        }
    }
    ${mbBreak}{
        &.lb-box-1{
            height: 130px;
        }
        &.lb-box-2{
            height: 95%;
            flex-direction: column;
            justify-content: space-evenly;
        }
        &.lb-box-3{
            flex-direction: column;
            width: 93%;
            height: 65px;
        }
        &.lb-box-4{
            width: 93%;
            height: 25px;
        }
        &.lb-box-5{
            width: 95%;
            height: 100%;
            max-width: 400px;
            font-size: calc(8px + 0.8vw);
        }
        &.lb-link-box-1,&.lb-link-box-2{
            padding: 0;
            width: 95%;
            justify-content: flex-start;
        }
    }
    `
    const Link = styled.p`
    text-align: left;
    font-size: calc(6px + 0.5vw);
    color: ${props=>props.color};
    ${mbBreak}{
        font-size: calc(8px + 0.4vw);
    }
    `
export default function Cover(props){
    

    return(
        <Container>
            <Box width="92%" height="80px" ml="120px" className="lb-box-1">
                <Box width="90%" height="80px" className="lb-box-2">
                    <Box width="85%" className="lb-box-3">
                        <Box width="50%" className="lb-link-box-1">
                            <Link>
                            {props.data["original_link"].slice(0,window.innerWidth/7.3)}
                            </Link>
                        </Box>
                        <Box width="35%" className="lb-link-box-2">
                            <Link color={theme.colors.Primary.Cyan}>
                            {props.data["full_short_link2"].slice(0,window.innerWidth/7.3)}
                            </Link>
                            </Box>
                    </Box>
                    <Box width="15%" height="80px" className="lb-box-4">
                        <Box width="60%" height="40%" className="lb-box-5">
                            {props.copyTag==="Copy"?
                            <Button light borderRadius="3px" click={()=>props.copyToClipboard(props.data["full_short_link2"])}>{props.copyTag}</Button>
                            :
                            <Button dark borderRadius="3px" click={()=>props.copyToClipboard(props.data["full_short_link2"])}>{props.copyTag}</Button>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}