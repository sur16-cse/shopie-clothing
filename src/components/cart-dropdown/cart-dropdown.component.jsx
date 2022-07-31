import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import './cart-dropdown.styles.scss'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import {useNavigate} from 'react-router-dom'

const CartDropDown=()=>{
    const {cartItems}=useContext(CartContext)
    const Navigate=useNavigate();
    const goCheckoutHandler=()=>{
        Navigate('/checkout')
    }
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => 
                    <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Button onClick={goCheckoutHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropDown