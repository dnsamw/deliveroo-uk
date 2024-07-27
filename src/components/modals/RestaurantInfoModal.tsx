import React from "react";
import SharedModalLayout from "../../layouts/SharedModalLayout";
import ModalHeader from "../UI/ModalParts/ModalHeader";
import { ModalType } from "../../types";
import ModalHeading from "../UI/ModalParts/ModalHeading";
import ModalText from "../UI/ModalParts/ModalText";
import ModalIconLink from "../UI/ModalParts/ModalIconLink";
import CenterModalContainerLayout from "../../layouts/CenterModalContainerLayout";

type Props = {
  onClose: () => void;
};

function RestaurantInfoModal({ onClose }: Props) {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <SharedModalLayout>
      <CenterModalContainerLayout>
        <div className="animate-zoom w-full xl:w-[600px] bg-white h-screen overflow-x-scroll rounded flex flex-col overflow-y-scroll mt-[60px]">
          <ModalHeader
            modalType={ModalType.RestaurantInfo}
            onClose={handleClose}
            modalTitle="Info"
          />
          <div className="modal-body">
            <ModalHeading heading={"About Tossed - St Martin's Lane"} />
            <ModalText text={"Tossed Deliveroo Menu"}/>
            <ModalHeading heading={"Allergens"} />
            <ModalText text={"Ask Tossed - St Martin's Lane about their ingredients and allergen information"}/>
            <ModalIconLink href="#" linkText={"Call Tossed - St Martin's Lane on +447541904227"} />
            <ModalHeading heading={"Hygiene rating"} />

            <div className="p-4 flex flex-col gap-4 items-center">
              <img className="w-48" src="https://ow.roocdn.com/assets/images/fsa/fhrs_5@3x.png" alt="text" />
              <p className="text-sm">The Food Standards Agency updates food hygiene ratings regularly. Visit the FSA’s website to see the most recent rating for this partner.
              Last updated: 26 Jul 2024</p>
            </div>

            <ModalIconLink href="#" linkText={"View hygiene rating"} />
            <ModalHeading heading={"Location"} />

            <div className="embed-map p-4">
              <div className="w-full h-48 bg-gray-300"></div>
              <p className="mt-1">100 St Martins Lane, London, WC2N4AZ</p>
            </div>
            <ModalIconLink href="#" linkText={"View map"} />
            <ModalHeading heading={"Notes"} />
            <ModalText text={"All dishes may contain traces of the following allergens: Gluten, Crustaceans, Eggs, Fish, Peanuts, Soybeans, Milk, Nuts (e.g. almonds, hazelnuts, walnuts, cashews, pecan nuts, Brazil nuts, pistachio nuts, macadamia nuts), Celery, Mustard, Sesame, Sulphur dioxide/sulphites, Lupin, Molluscs. For any questions regarding the allergen contents of specific dishes please contact the restaurant directly."} />
          </div>
          {/* <div className="modal-footer"></div> */}
        </div>
      </CenterModalContainerLayout>
      </SharedModalLayout>
    </>
  );
}

export default RestaurantInfoModal;
