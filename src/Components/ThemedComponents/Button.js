import React from 'react'
import styled,{ ThemeProvider,css} from 'styled-components'
import theme from '../../theme'

function Button(props){
    const Button = styled.button`
  font-size: 1em;
  border-radius: 3px;   
  color: white;
  width: 100%;
  height: 100%;
  font-family: ${theme.typography.Fonts.Family};
  font-weight: ${theme.typography.Fonts.Weights[1]};
  border-width: 0px;
  border-radius: ${props=>props.borderRadius};
  ${props =>
    props.light &&
    css`
      background: ${theme.colors.Primary.Cyan}
    `};
  ${props =>
    props.dark &&
    css`
      background: ${theme.colors.Primary["Dark Violet"]}
    `};
`;
return(
        <Button 
            light={props.light} 
            dark={props.dark} 
            borderRadius={props.borderRadius}>
                {props.children}
        </Button>
)
}

export default Button