import React from 'react'

const CategoryField = (props) => {
  const { category, checked }  = props

  return (
    <div className=" four wide field">
      <div className="ui radio checkbox">

        <input
          type="radio"
          name="category"
          checked={ checked }
          onChange={ props.handleChange }
          value={ category }
        />
        <label>{ category }</label>

      </div>
    </div>
  )
}

export default CategoryField
