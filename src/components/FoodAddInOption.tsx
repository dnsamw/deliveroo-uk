import React from "react";
import RadioAddIn from "./UI/AddInItems/RadioAddIn";
import CheckboxAddIn from "./UI/AddInItems/CheckboxAddIn";
import { FoodOption, FoodOptionItem, OptionSelectionType, RequiredFlag } from "./_testdata/fakeData";

type Props = {
  option:FoodOption;
};

function FoodItemAddIn({option}: Props) {


  const renderOpttionItems = (option:FoodOption) => {
    switch (option.option_selection_type) {
      case OptionSelectionType.RADIO:
        return <RadioAddIn />;
      case OptionSelectionType.CHECKBOX:
        return <CheckboxAddIn items={option.option_items} />;
    }
  };

  return (
    <>
      <div className="pb-1">
        <h4 className="text-md font-semibold">{option.option_display_name}</h4>
        {option.option_required_flg === RequiredFlag.YES && <p className="text-sm text-gray-700">required</p>}
      </div>
      <div className="w-full flex flex-col text-gray-900 justify-center items-center">
        {option.option_items && renderOpttionItems(option)}
      </div>
    </>
  );
}

export default FoodItemAddIn;
