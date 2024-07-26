import {
  IoChevronForwardSharp,
  IoInformationCircleOutline,
  IoStarSharp,
} from "react-icons/io5";
import deliverGuyIcon from "../components/UI/SVGIcons/deliver-guy-colored.svg";
import IconButton from "./UI/IconButton";
import { IconButtonTypes } from "../Config";
type Props = {};

function MenuHeaderHero({}: Props) {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 p-0 sm:p-4 justify-between xl:bg-white">
      <div className="menu-thumb w-full sm:w-[35%] xl:w-[30%] bg-white p-0 sm:p-4">
        <div className="thumb-wrapper h-full flex items-center justify-center relative">
          <img
            className="rounded w-full h-full lg:aspect-square object-cover xl:aspect-auto"
            src="https://rs-menus-api.roocdn.com/images/57800532-e16e-4743-83fb-06c3c2230d76/image.jpeg?width=538&height=302&auto=webp&format=jpg&fit=crop"
          />
          <div className="absolute bottom-2 right-2 flex lg:hidden action-button mt-2 bg-white sm:right-auto sm:bottom-2">
            <IconButton
              type={IconButtonTypes.GROUP_ORDER}
              text="Start group order"
            />
          </div>
        </div>
      </div>
      <div className="menu-info w-[100%] sm:w-[65%] xl:w-[70%] bg-white p-4 grid grid-cols-1 xl:grid-cols-[1fr,auto] gap-1 xl:gap-2">
        <div className="flex flex-col gap-2 xl:gap-4 xl:col-span-1">
          <div className="title">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
              Tossed - St Martin's Lane
            </h1>
          </div>

          <div className="tags text-md text-gray-500">
            <div className="flex flex-wrap gap-2">
              <span>Chicken</span>
              <span>· Salad</span>
              <span>· Healthy</span>
            </div>
          </div>

          <div className="metrics text-md text-gray-500">
            <div className="flex flex-wrap gap-2">
              <span>0.20 miles away</span>
              <span>· Opens at 11:00 on Monday</span>
              <span>· £7.00 minimum</span>
              <span>· £1.29 delivery</span>
            </div>
          </div>

          <button className="info text-md text-gray-500 flex items-center gap-4 hover:cursor-pointer xl:w-[350px] rounded p-1 border-solid border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-100">
            <div className="w-30 sm:w-auto">
              <IoInformationCircleOutline className="text-3xl" />
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start">
              <p className="text-md text-green-700">Info</p>
              <p className="text-sm">Map, allergens and hygenene ratings</p>
            </div>
            <div className="w-30 sm:w-auto">
              <IoChevronForwardSharp className="text-3xl text-teal-400" />
            </div>
          </button>

          <button className="ratings text-xl text-gray-500 flex items-center gap-4 hover:cursor-pointer xl:w-[350px] rounded p-1 border-solid border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-100">
            <div className="w-30 sm:w-auto">
              <IoStarSharp className="text-3xl text-green-700" />
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start">
              <p className="text-md text-green-700">4.7 Excellent</p>
              <p className="text-sm">Map, allergens and hygenene ratings</p>
            </div>
            <div className="w-30 sm:w-auto">
            <IoChevronForwardSharp className="text-3xl text-teal-400" />
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-4 xl:col-start-2 xl:row-start-1 xl:row-span-2">
          <div className="deliver-info text-md text-gray-500 flex gap-4">
            <div>
              <img className="w-[35px]" src={deliverGuyIcon} />
            </div>
            <div>
              <p className="text-md">Deliver tomorrow from</p>
              <p className="text-md">11:00 - 11:30</p>
            </div>
            <div className="action">
              <a className="text-md text-teal-400" href="#">
                Change
              </a>
            </div>
          </div>

          <div className="hidden lg:flex action-button mt-2">
            <IconButton
              type={IconButtonTypes.GROUP_ORDER}
              text="Start group order"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuHeaderHero;
