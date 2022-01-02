import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,name,glass,id,type}) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt="image" />
      </div>
      <div className='cocktail-footer'>
        <h2>{name}</h2>
        <h4>{glass}</h4>
        <p>{type}</p>
        <Link to={`/singlecocktail/${id}`} className='btn btn-primary btn-details'>details</Link>
      </div>
    </article>
  )
}

export default Cocktail
