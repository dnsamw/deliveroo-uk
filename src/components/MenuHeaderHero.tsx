import {
  IoChevronForwardSharp,
  IoInformationCircleOutline,
  IoStarSharp,
} from "react-icons/io5";
import deliverGuyIcon from "../components/UI/SVGIcons/deliver-guy-colored.svg";
import IconButton from "./UI/IconButton";
import { IconButtonTypes } from "../config";
type Props = {};

function MenuHeaderHero({}: Props) {
  return (
    <div className="w-full flex gap-4 h-full p-4 bg-white justify-between">
      <div className="menu-thumb w-[30%] bg-white">
        <div className="thumb-wrapper flex h-full items-center justify-center">
          <img
            className="h-[400px]"
            src="https://rs-menus-api.roocdn.com/images/57800532-e16e-4743-83fb-06c3c2230d76/image.jpeg?width=538&height=302&auto=webp&format=jpg&fit=crop"
          />
        </div>
      </div>
      <div className="menu-info w-[70%] bg-white p-4 grid grid-cols-2 grid-rows-5 gap-6">
        <div className="title col-start-1 row-start-1">
          <h1 className="text-5xl font-bold">Tossed - St Martin's Lane</h1>
        </div>

        <div className="tags col-start-1 row-start-2 text-xl text-gray-500">
          <ul className="flex gap-2">
            <li>Chicken</li>
            <li>· Salad</li>
            <li>· Healthy</li>
          </ul>
        </div>

        <div className="metrics col-start-1 row-start-3 text-xl text-gray-500">
          <ul className="flex gap-2">
            <li>0.20 miles away</li>
            <li>· Opens at 11:00 on Monday</li>
            <li>· £7.00 minimum</li>
            <li>· £1.29 delivery</li>
          </ul>
        </div>

        <div className="info col-start-1 row-start-4 text-xl text-gray-500 flex gap-4 items-center">
          <div>
            <IoInformationCircleOutline className="text-3xl" />
          </div>
          <div>
            <p className="text-2xl">Info</p>
            <p className="text-sm">Map, allergens and hygenene ratings</p>
          </div>
          <IoChevronForwardSharp className="text-3xl text-teal-400" />
        </div>

        <div className="ratings col-start-1 row-start-5 text-xl text-gray-500 flex gap-4 items-center hover:cursor-pointer">
          <div>
            <IoStarSharp className="text-3xl" />
          </div>
          <div>
            <p className="text-2xl">4.7 Excellent</p>
            <p className="text-sm">Map, allergens and hygenene ratings</p>
          </div>
          <IoChevronForwardSharp className="text-3xl text-teal-400" />
        </div>

        <div className="deliver-info col-start-2 row-start-1 text-xl text-gray-500 flex gap-4 items-center justify-end">
          <div>
            <img className="w-[35px]" src={deliverGuyIcon} />
          </div>
          <div>
            <p className="text-2xl">Deliver tomorrow from</p>
            <p className="text-md">11:00 - 11:30</p>
          </div>
          <div className="action">
            <a className="text-xl text-teal-400" href="#">
              Change
            </a>
          </div>
        </div>

        <div className="col-start-2 row-start-2 flex justify-end">
          <IconButton
            type={IconButtonTypes.GROUP_ORDER}
            text="Start group order"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuHeaderHero;
