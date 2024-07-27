import {
  IoChevronForwardSharp,
  IoInformationCircleOutline,
  IoStarSharp,
} from "react-icons/io5";
import deliverGuyIcon from "../components/UI/SVGIcons/deliver-guy-colored.svg";
import IconButton from "./UI/IconButton";
import { IconButtonTypes } from "../Config";
import { useState } from "react";
import { ModalType } from "../types";
import RestaurantInfoModal from "./modals/RestaurantInfoModal";
import RestaurantReviewsModal from "./modals/RestaurantReviewsModal";
import {fakeFoodMenu as foodMenu} from "./_testdata/fakeData";
import LocationChangerModal from "./modals/LocationChangerModal";

type Props = {};
function MenuHeaderHero({}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const handleModalOpen = (modalType: ModalType) => {
    setModalType(modalType);
    setIsModalOpen(!isModalOpen);
  };

  const renderModal = (modalType: ModalType | null) => {
    switch (modalType) {
      case ModalType.RestaurantInfo:
        return <RestaurantInfoModal onClose={() => setIsModalOpen(false)} />;
      case ModalType.RestaurantReviews:
        return <RestaurantReviewsModal onClose={() => setIsModalOpen(false)} />;
      case ModalType.LocationChanger:
        return <LocationChangerModal onClose={() => setIsModalOpen(false)} />;
      default:
        return null;
    }
  };

  const getDistanceFromCurrentLocation = () => {
    // fake - use google maps api to get real data !!
    return "0.20 miles";
  };
  const getNearestOpenDateAndTime = () => {
    // fake - calculate here !!
    return "11:00 on Monday";
  };

  const getDeiveryCharge = () => {
    // fake - calculate here according to the distance and other factors!!
    return "1.29";
  };

  const getOverallRating = (rating_value: number) => {
    if(rating_value < 2.9) return rating_value + " Poor";
    if(rating_value < 3.5) return rating_value + " Good";
    if(rating_value > 3.5) return rating_value + " Exellent";
  };

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
              {foodMenu.restaurant.name}
            </h1>
          </div>

          <div className="tags text-md text-gray-500">
            <div className="flex flex-wrap gap-2">
              {foodMenu.tags.map((tag, index) => <span key={index}> { foodMenu.tags.length-1 !==index  ? `${tag} . `:tag}</span>)}
            </div>
          </div>

          <div className="metrics text-md text-gray-500">
            <div className="flex flex-wrap gap-2">
              <span>{getDistanceFromCurrentLocation()} miles away</span>
              <span>· Opens at {getNearestOpenDateAndTime()}</span>
              <span>· £ {foodMenu.min_price.toFixed(2)} minimum</span>
              <span>· £ {getDeiveryCharge()} delivery</span>
            </div>
          </div>

          <button
            onClick={() => handleModalOpen(ModalType.RestaurantInfo)}
            className="info text-md text-gray-500 flex items-center gap-4 hover:cursor-pointer xl:w-[350px] rounded p-1 border-solid border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
            <div className="w-30 sm:w-auto">
              <IoInformationCircleOutline className="text-3xl" />
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start">
              <p className="text-md text-gray-700">Info</p>
              <p className="text-sm">Map, allergens and hygenene ratings</p>
            </div>
            <div className="w-30 sm:w-auto">
              <IoChevronForwardSharp className="text-3xl text-teal-400" />
            </div>
          </button>

          <button
            onClick={() => handleModalOpen(ModalType.RestaurantReviews)}
            className="ratings text-xl text-gray-500 flex items-center gap-4 hover:cursor-pointer xl:w-[350px] rounded p-1 border-solid border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
            <div className="w-30 sm:w-auto">
              <IoStarSharp className="text-3xl text-green-700" />
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start">
              <p className="text-md text-green-700">{getOverallRating(foodMenu.overall_rating)}</p>
              <p className="text-sm">Map, allergens and hygenene ratings</p>
            </div>
            <div className="w-30 sm:w-auto">
              <IoChevronForwardSharp className="text-3xl text-teal-400" />
            </div>
          </button>
        </div>

        <div className="flex flex-col gap-4 xl:col-start-2 xl:row-start-1 xl:row-span-2">
        <button
            onClick={() => handleModalOpen(ModalType.LocationChanger)}
            className="ratings text-gray-500 flex items-center gap-4 hover:cursor-pointer xl:w-[350px] rounded p-1 border-solid border-2 border-white focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
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
          </button>

          <div className="hidden lg:flex action-button mt-2">
            <IconButton
              type={IconButtonTypes.GROUP_ORDER}
              text="Start group order"
            />
          </div>
        </div>
      </div>
      {isModalOpen && renderModal(modalType)}
    </div>
  );
}

export default MenuHeaderHero;
