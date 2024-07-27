import React, { useState } from 'react';
import SharedModalLayout from '../../layouts/SharedModalLayout';
import CenterMobileBottomModalContainerLayout from '../../layouts/CenterMobileBottomModalContainerLayout';
import { IoCloseSharp } from 'react-icons/io5';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

type Props = {
  onClose: () => void;
}
const DeliverLocationTimeMultiStepModal = ({onClose}:Props) => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => setStep((prev) => prev + 1);
  const handlePrevStep = () => setStep((prev) => prev - 1);
const handleClose = () => {
  onClose();
}
  return (
    <SharedModalLayout>
      <CenterMobileBottomModalContainerLayout>
      <div className="bg-white p-6 rounded">
        <div className="flex justify-end">
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => setStep(1)}
          >
            &times;
          </button>
        </div>
        {step === 1 && (
          <StepOne onChangeLocation={handleNextStep} onChangeTime={handleNextStep} />
        )}
        {step === 2 && <StepTwo onConfirm={handlePrevStep} onBack={handlePrevStep} />}
        {step === 3 && <StepThree onConfirm={handlePrevStep} onBack={handlePrevStep} />}
      </div>
      <button
            onClick={handleClose}
            className="bg-white colse absolute right-4 top-2 p-2 cursor-pointer rounded-full focus:outline-none focus:ring-2 focus:ring-teal-100"
          >
            <IoCloseSharp className="text-3xl text-teal-400" />
          </button>
      </CenterMobileBottomModalContainerLayout>
    </SharedModalLayout>
  );
};

const StepOne: React.FC<{ onChangeLocation: () => void; onChangeTime: () => void }> = ({ onChangeLocation, onChangeTime }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Where and when</h2>
    <div className="mb-4">
      <label className="flex items-center">
        <input type="radio" name="deliveryOption" checked className="mr-2 accent-emerald-400" />
        <span>Delivery</span>
      </label>
    </div>
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="text-gray-500">St James's</span>
          <span> London</span>
        </div>
        <button className="text-teal-500" onClick={onChangeLocation}>
          Change
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-gray-500">Deliver in</span>
          <span> 20 - 35 min</span>
        </div>
        <button className="text-teal-500" onClick={onChangeTime}>
          Change
        </button>
      </div>
    </div>
    <button className="w-full bg-teal-400 text-white py-2 rounded hover:bg-teal-500" onClick={() => alert('Confirmed')}>
      Confirm
    </button>
  </div>
);

const StepTwo: React.FC<{ onConfirm: () => void; onBack: () => void }> = ({ onConfirm, onBack }) => (
  <div>
    <div className="flex items-center mb-4">
      <button className="text-teal-500" onClick={onBack}>
      <HiOutlineArrowNarrowLeft className="w-8 h-8 text-teal-400" />
      </button>
      <h2 className="text-xl font-semibold flex-1 text-center">When</h2>
    </div>
    <div className="mb-4">
      <label className="flex items-center">
        <input type="radio" name="deliveryTime" className="mr-2 accent-emerald-400" checked />
        <span>Now</span>
      </label>
    </div>
    <div className="mb-4">
      <label className="flex items-center">
        <input type="radio" name="deliveryTime" className="mr-2 accent-emerald-400" />
        <span>Schedule for later</span>
      </label>
    </div>
    <div className="flex justify-between">
      <button className="w-1/2 bg-white border border-teal-5=400 text-teal-400 py-2 rounded" onClick={onBack}>
        Cancel
      </button>
      <button className="w-1/2 bg-teal-400 text-white py-2 rounded ml-2 hover:bg-teal-500" onClick={onConfirm}>
        Confirm
      </button>
    </div>
  </div>
);

const StepThree: React.FC<{ onConfirm: () => void; onBack: () => void }> = ({ onConfirm, onBack }) => (
  <>
    <div className="flex items-center mb-4">
      <button className="text-teal-500" onClick={onBack}>
        &larr;
      </button>
      <h2 className="text-xl font-semibold flex-1 text-center">Enter your full address</h2>
    </div>
    <div className="mb-4">
      <p>
        <a href="#" className="text-teal-500">
          Log in
        </a>{' '}
        for your recent addresses.
      </p>
    </div>
    <div className="mb-4">
      <textarea className="w-full border rounded p-2" rows={4} placeholder="Enter your address"></textarea>
    </div>
    <button className="w-full bg-teal-500 text-white py-2 rounded" onClick={onConfirm}>
      Search
    </button>
  </>
);

export default DeliverLocationTimeMultiStepModal;
