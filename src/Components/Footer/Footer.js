import React from 'react'
import theme from '../../theme'
import styled from 'styled-components'
import Button from '../ThemedComponents/Button'

const mbBreak = `@media(max-width:${theme.breakpoints[0]})`;
    const Container=styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 300px;
    background-color: ${theme.colors.Neutral['Very Dark Violet']};
    ${`@media(max-width: 790px)`}{
        flex-direction: column;
    }
    `
    const Box = styled.div`
    display: flex;
    justify-content: space-between;
    `
    const Box1=styled(Box)`
    width: 24%;
    min-width: 80px;
    padding-top: 40px;
    ${`@media(max-width: 790px)`}{
        width: 100%;
        padding-top:50px;
    }
    `
    const Box1a=styled(Box)`
    width: 100%;
    justify-content: flex-end;
    height: 50px;
    ${`@media(max-width: 790px)`}{
        justify-content: center;
    }
    `
    const Box2=styled(Box)`
    width:50%;
    padding-top: 40px;
    justify-content: flex-end;
    &.foot-box2-cont-2{
        width: 87%;
        max-width: 460px;
        justify-content: space-between;
        padding-top:0;
    }
    ${`@media(max-width: 790px)`}{
        width: 100%;
        padding-top:10px;
        justify-content: center;
        text-align:center;
        &.foot-box2-cont-2{
            width:95%;
        }
    }
    ${mbBreak}{
        flex-direction: column;
        align-items:center;
    }
    `
    const Box2a= styled(Box)`
    width: 20%;
    min-width: 138px;
    display:flex;
    flex-direction: column;
    justify-content: unset;
    ${`@media(max-width: 790px)`}{
        width: 60%;
        min-width:124px;
    }
    ${mbBreak}{
        padding-bottom: 10px;
    }
    `
    const BoxElements=styled.div`
    width: 90%;
    text-align: left;
    height:40px;
    color: ${theme.colors.Neutral.Gray};
    &:hover{
        cursor: pointer;
        color: ${theme.colors.Primary.Cyan}
    }
    ${`@media(max-width: 790px)`}{
        text-align: center;
    }
    ${mbBreak}{
        height:30px;
    }
    `
    const BoxElementHead=styled(BoxElements)`
    color: white;
    height: 55px;
    &:hover{
        color: white;
        cursor: default;
    }
    ${mbBreak}{
        height:35px;
    }
    `
    const Box3=styled(Box)`
    width: 25%;
    padding-top: 40px;
    justify-contetn: flex-start;
    ${`@media(max-width: 790px)`}{
        width: 100%;
        padding-top: 10px;
        justify-contetn: center;
    }
    `
    const Box3a=styled(Box)`
    width: 100%;
    height: 40px;
    `
    const Box3ab=styled(Box3a)`
    width: 80%;
    display:flex;
    justify-content: space-evenly;
    ${`@media(max-width: 790px)`}{
        width: 100%;
        justify-content: center;
    }
    `
    const WebLogo=styled.img`
    width: 38%;
    height: 38px;
    min-width:110px;
    filter: brightness(0) invert(1);
    ${`@media(max-width: 790px)`}{
        max-width: 100px;
    }
    `
    const SocialLogo=styled.img`
    width: 8%;
    height: 25px;
    min-width: 20px;
    &:hover{
        cursor: pointer;
        filter: invert(.5) sepia(1) saturate(3) hue-rotate(134deg);
    }
    ${`@media(max-width: 790px)`}{
        width: 4%;
        padding: 0 15px;
    }
    `
export default function Cover(props){
    
    const Features= ["Link Shortening","Branded Links","Analytics"]
    const Resources= ["Blog","Developer","Support"]
    const Company= ["About","Our Team","Careers","Contact"]

    return(
        <Container>
            <Box1>
                <Box1a>
                    <WebLogo src={'./assets/images/logo.svg'} alt="logo"></WebLogo>
                </Box1a>
            </Box1>
            <Box2>
                <Box2 className="foot-box2-cont-2">
                    <Box2a>
                        <BoxElementHead>Features</BoxElementHead>
                        {Features.map((ft,i)=>{
                            return(
                                <BoxElements key={i}>{ft}</BoxElements>
                            )
                        })}
                    </Box2a>
                    <Box2a>
                        <BoxElementHead>Resources</BoxElementHead>
                        {Resources.map((re,i)=>{
                            return(
                                <BoxElements key={i}>{re}</BoxElements>
                            )
                        })}
                    </Box2a>
                    <Box2a>
                        <BoxElementHead>Company</BoxElementHead>
                        {Company.map((co,i)=>{
                            return(
                                <BoxElements key={i}>{co}</BoxElements>
                            )
                        })}
                    </Box2a>
                </Box2>
                
            </Box2>
            <Box3>
                <Box3a>
                    <Box3ab>
                        <SocialLogo src={'./assets/images/icon-facebook.svg'} alt="facebook"></SocialLogo>
                        <SocialLogo src={'./assets/images/icon-twitter.svg'} alt="twitter"></SocialLogo>
                        <SocialLogo src={'./assets/images/icon-pinterest.svg'} alt="pinterest"></SocialLogo>
                        <SocialLogo src={'./assets/images/icon-instagram.svg'} alt="instagram"></SocialLogo>
                    </Box3ab>
                </Box3a>
                
            </Box3>
        </Container>
    )
}