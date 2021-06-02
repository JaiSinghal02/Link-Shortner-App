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
    min-height: 200px;
    margin-top: 40px;
    background: linear-gradient(180deg, white 50%, #f0f1f6 50%);
    `
    const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${props=>props.ml};
    padding-left: ${props=>props.pl};
    padding-top: ${props=>props.pd};
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius: 8px;
    background-image: url(${props=>props.background});
    background-repeat: no-repeat;
    background-size: 100% 168px;
    &.sb-in-cont{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
    }
    &.sb-box-1{
        justify-content: flex-start;
    }
    &.sb-box-5{
        justify-content: flex-start;
    }
    ${`@media(max-width: 630px)`}{
        &.sb-box-1{
            margin-left: 30px;
        }
    }
    ${mbBreak}{
        &.sb-box-1{
            margin: 0;
            width: 90%;
            height: 150px;
        }
        &.sb-box-2{
            flex-direction: column;
            height: 150px;
            padding: 5px 0;
            width: 100%;
        }
        &.sb-box-3{
            width: 100%;
            height: 120px;
        }
        &.sb-box-4{
            padding: 0;
            height: 90%;
        }
        &.sb-box-5{
            width: 100%;
            
            justify-content: center;
        }
        &.sb-box-6{
            width: 91%;
            height: 77%;
        }
    }

    `
    const SearchField= styled.input`
    height: 60%;
    width: 100%;
    border: ${props=>props.error?`2px solid ${theme.colors.Secondary.Red}`:"none"};
    border-radius: 8px;
    text-indent: 15px;
    font-family: ${theme.typography.Fonts.Family} !important;
    font-weight: ${theme.typography.Fonts.Weights[1]};
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${props=>props.error?theme.colors.Secondary.Red:theme.colors.Neutral.Gray};
        font-size: 15px;
    }
    :-ms-input-placeholder {
        color: ${props=>props.error?theme.colors.Secondary.Red:theme.colors.Neutral.Gray};
        font-size: 15px;
    }
    &:focus{
        outline:none;
    }
    ${mbBreak}{
        height: 80%;
    }
    `
    const InfoMsg = styled.p`
    color: ${theme.colors.Secondary.Red};
    margin: 0;
    margin-top: 5px;
    font-size: 12px;
    font-style: italic;
    font-weight: ${theme.typography.Fonts.Weights[1]};
    `
export default function Cover(props){
    return(
        <Container>
            <Box width="92%" height="200px" ml="120px" className="sb-box-1">
                <Box width="90%" height="168px" background={"./assets/images/bg-shorten-desktop.jpg"} className="sb-box-2">
                    <Box width="70%" height="100%" className="sb-box-3">
                        <Box width="90%" height={props.error?"74%":"60%"} pd={props.error?"23px":"0"} pl="15px"  className="sb-in-cont sb-box-4">
                            <SearchField placeholder="Shorten a link here..." error={props.error} onChange={props.setSearchLink} value={props.value}></SearchField>
                            {props.error?<InfoMsg>{props.error}</InfoMsg>:null}
                        </Box>
                    </Box>
                    <Box width="30%" height={window.innerWidth>375?"100%":(props.error?"74px":"120px")} className="sb-box-5">
                        <Box width="80%" height="40%" className="sb-box-6">
                            <Button onClick light borderRadius="8px" click={props.searchLink}>Shorten it!</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}