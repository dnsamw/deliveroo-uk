import React from 'react'
import RadioAddIn from './UI/AddInItems/RadioAddIn'

type Props = {}

function FoodItemAddIn({}: Props) {
  return (
    <div className='w-full flex bg-gray-200 min-h-16 text-gray-900 justify-center items-center'>
      <RadioAddIn />
    </div>
  )
}

export default FoodItemAddIn