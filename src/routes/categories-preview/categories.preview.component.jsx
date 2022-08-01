import { useContext,Fragment} from 'react'
import { CategoriesContext } from '../../contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component'
import { Watch } from  'react-loader-spinner'
import {useState,useEffect} from 'react';
const CategoriesPreview=()=>{
    const {categoriesMap}=useContext(CategoriesContext)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])
    return(
        <>
        {
            loading?
            <div  className="loading-spin" >
            <Watch color="grey" height={130} width={130} />
            </div>
            :
            Object.keys(categoriesMap).map(title=>{
             const products=categoriesMap[title];
             return <CategoryPreview key={title} title={title} products={products}/>
            })
        }
        </>
    )
}

export default CategoriesPreview