import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading,setloading]=useState(true);
  const [cocktail,setcocktail]=useState([]);
  const [search,setsearch]=useState('');

  const fetchdrinks =async ()=>{
    try {
      const response =await fetch(`${url}${search}`)
      const data = await response.json()
      const {drinks}=data;
      if(drinks){
        const newdrinks= drinks.map((items)=>{
          const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=items;
          return{
            id:idDrink,
            name:strDrink,
            image:strDrinkThumb,
            type:strAlcoholic,
            glass:strGlass,

          }
        })
        setcocktail(newdrinks);
      }else{
        setcocktail([])
      }
      setloading(false)
    } catch (error) {
      console.log(error)
    }
  }
useEffect(()=>{
  fetchdrinks()
},[search])


  return <AppContext.Provider 
  value={{loading,
    cocktail,
    setsearch,}

  }>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
