import React, { useState } from 'react'

type Props = {}

function RadioAddIn({}: Props) {
  const [selected, setSelected] = useState('');
  const foodOptionItems = [
    { id: 'double-grilled', name: 'double grilled chicken thigh', allergens: 'no known allergens', calories: 252, price: 2.69 },
    { id: 'chicken-breast', name: 'chicken breast', allergens: 'no known allergens', calories: 93 },
    { id: 'grilled-chicken', name: 'grilled chicken thigh', allergens: 'no known allergens', calories: 126 },
    { id: 'falafel', name: 'falafel', allergens: 'Contains gluten', calories: 148 },
  ];

  return (
    
    <div className="max-w-md mx-auto mt-8">
    {foodOptionItems.map((option) => (
      <label key={option.id} className="flex items-center space-x-3 mb-3 cursor-pointer">
        <input
          type="radio"
          name="food-option"
          value={option.id}
          checked={selected === option.id}
          onChange={() => setSelected(option.id)}
          className="form-radio h-5 w-5 text-blue-600"
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">{option.name}</span>
          <span className="text-xs text-gray-500">
            {option.allergens}, {option.calories} kcal
          </span>
        </div>
        {option.price && (
          <span className="ml-auto text-sm font-medium text-gray-900">+£{option.price.toFixed(2)}</span>
        )}
      </label>
    ))}
  </div>
  )
}

export default RadioAddIn