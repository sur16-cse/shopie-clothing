import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import {Outlet, Link} from 'react-router-dom'
import { Fragment,useContext } from 'react'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import {NavigationContainer, NavLinksContainer,LogoContainer,NavLinks} from './navigation.styles.jsx'
// import { LogoContainer } from './navigation.styles.jsx'
// import { NavLinksContainer } from './navigation.styles.jsx'
// import { NavLinks } from './navigation.styles.jsx'
const Navigation=()=>{
    const {currentUser,setCurrentUser}=useContext(UserContext)
    const {isCartOpen}=useContext(CartContext)
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLinks to='/shop'>
                        SHOP
                    </NavLinks>
                    {
                    //when there is currentUser then render different link i.e, sign out when there is no user then sign in
                        currentUser?(
                            <NavLinks as='span' onClick={signOutUser}>SIGN OUT</NavLinks>
                        ):(
                            <NavLinks to='/auth'>
                                SIGN IN
                            </NavLinks>
                        )
                    }
                    <CartIcon/>
                </NavLinksContainer>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation
