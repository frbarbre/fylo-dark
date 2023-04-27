import React from 'react'

const Button = ({ textStyles }) => {
  return (
    <button type="button" className="max-w-[250px] w-[100%] h-[50px] rounded-full blue-gradient font-semibold drop-shadow">{textStyles}</button>
  )
}

export default Button