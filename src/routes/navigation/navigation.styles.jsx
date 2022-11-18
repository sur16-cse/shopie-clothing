import styled from 'styled-components'
import { Link } from 'react-router-dom';
export const NavigationContainer=styled.div`
    height: 12vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgb(4, 40, 87);

`

export const LogoContainer=styled(Link)`
      height: 100%;
      width: 70px;
      padding: 25px;
      
`

export const NavLinksContainer=styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`

export const NavLinks=styled(Link)`
        padding: 10px 15px;
        padding-top: 20px;
        cursor: pointer;
        color: aliceblue;
`
  
