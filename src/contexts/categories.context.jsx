import { useState,useEffect } from "react";
import { createContext } from "react";
import SHOP_DATA from '../shop-data.js'
import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
export const CategoriesContext=createContext({
    categoriesMap:{}
});

export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({})
    useEffect(()=>{
        const getCategoriesMap=async()=>{
            const categroryMap=await getCategoriesAndDocuments()
            console.log(categroryMap)
            setCategoriesMap(categroryMap)
        }
       getCategoriesMap()
    },[])
    const value={categoriesMap}
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}