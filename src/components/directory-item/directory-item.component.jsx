import './directory-item.styles.scss'
import {useNavigate} from 'react-router-dom'
import { useTransition } from 'react';
const DirectoryItem=({category})=>{
    const {imageUrl, title,route}=category;
    const Navigate=useNavigate()
    const onNavigateHandler = ()=>Navigate(route)
    return ( 
        <div className='directory-item-container' onClick={onNavigateHandler}>
        <div 
        className='background-image'
        style={{ backgroundImage:`url(${imageUrl})`}} />
        <div className='directory-item-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
    </div>
    )
}

export default DirectoryItem