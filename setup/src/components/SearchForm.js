import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../context'



const SearchForm = () => {

  const{setsearch}=useGlobalContext()
  const searchValue=useRef('')
  
  useEffect(()=>{    
    searchValue.current.focus()
  },[])

  const searchCocktail=()=>{
    setsearch(searchValue.current.value)
}

  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form action="" onSubmit={handlesubmit} className="search-form">
        <div className='form-control'>

        <label htmlFor="name">search cocktail</label>
        <input type="text" 
        id='name'
        ref={searchValue}
        onChange={searchCocktail}>

        </input>
        </div>
      </form>

    </section>
  )
}

export default SearchForm
