import React, { useState } from 'react'
import { FoodOptionItem } from '../../_testdata/fakeData';

type Props = {
  items:FoodOptionItem[];
}

function CheckboxAddIn({items}: Props) {
  const [selected, setSelected] = useState('');
  return (
    
    <div className="w-full mx-auto mt-2">
    {items.map((item) => (
      <label key={item.id} className="flex items-center justify-between space-x-3 mb-4 cursor-pointer">

        <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name="food-option"
          value={item.id}
          checked={selected === item.id}
          onChange={() => setSelected(item.id)}
          className="form-radio h-5 w-5 accent-teal-400"
        />
        <div className="flex flex-col">
          <span className="text-sm  text-black">{item.name}</span>
          <span className="text-xs text-gray-500">
            {item.allergens}, {item.calories} kcal
          </span>
        </div>
        </div>

        {item.price && (
          <span className="ml-auto text-sm  text-gray-900">+£{item.price.toFixed(2)}</span>
        )}
      </label>
    ))}
  </div>
  )
}

export default CheckboxAddIn