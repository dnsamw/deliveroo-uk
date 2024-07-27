import React, { useState } from 'react'

type Props = {}

function CheckboxAddIn({}: Props) {
  const [selected, setSelected] = useState('');
  const foodOptionItems = [
    { id: 'double-grilled', name: 'double grilled chicken thigh', allergens: 'no known allergens', calories: 252, price: 2.69 },
    { id: 'chicken-breast', name: 'chicken breast', allergens: 'no known allergens', calories: 93 },
    { id: 'grilled-chicken', name: 'grilled chicken thigh', allergens: 'no known allergens', calories: 126 },
    { id: 'falafel', name: 'falafel', allergens: 'Contains gluten', calories: 148 },
  ];

  return (
    
    <div className="w-full mx-auto mt-2">
    {foodOptionItems.map((option) => (
      <label key={option.id} className="flex items-center justify-between space-x-3 mb-4 cursor-pointer">

        <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="food-option"
          value={option.id}
          checked={selected === option.id}
          onChange={() => setSelected(option.id)}
          className="form-radio h-5 w-5 accent-teal-400"
        />
        <div className="flex flex-col">
          <span className="text-sm  text-black">{option.name}</span>
          <span className="text-xs text-gray-500">
            {option.allergens}, {option.calories} kcal
          </span>
        </div>
        </div>

        {option.price && (
          <span className="ml-auto text-sm  text-gray-900">+£{option.price.toFixed(2)}</span>
        )}
      </label>
    ))}
  </div>
  )
}

export default CheckboxAddIn