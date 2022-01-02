import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{cocktail,loading}=useGlobalContext();
  
  if(loading){
    return(

      <Loading/>
    )
  }
  if(cocktail.length<1){
    return(
      <h3 className='section-title'>the cocktail you are looking for is not available</h3>
    )
  }
  return(
    <section className='section'>
      <h1 className='section-title'>cocktail list</h1>
      <div className='cocktails-center'>
        {cocktail.map((items)=>{
          return <Cocktail key={items.id} {...items}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
