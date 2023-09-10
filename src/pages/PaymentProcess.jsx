import React, { useState } from "react";
import ShippingAdresse from "./ShippingAdresse";
import BillingAdresse from "./BillingAdresse";
import ReviewAndPayment from "./ReviewAndPayment";

const PaymentProcess = () => {
  const [activeStep, setActiveStep] = useState("about");

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="bg-gray h-[184px] flex items-center">
        <div className="container flex flex-row mx-auto items-center">
          <div className="font-bold text-blue ml-4 text-[60px]">
            Payment Process
          </div>
        </div>
      </div>
      <div multisteps-form className="mb-12">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mx-auto my-12 flex-0 ">
            <div className="grid grid-cols-3">
              <button
                aria-controls="about"
                type="button"
                className={`before:w-4  before:h-4 before:rounded-full  before:scale-120 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:bg-current before:transition-all before:ease-linear before:content-[''] sm:indent-0 ${
                  activeStep === "about" ? "text-blue" : "text-gray"
                }`}
                title="Shipping Adresse"
                onClick={() => handleStepClick("about")}
              >
                <span
                  className={`${
                    activeStep === "about" ? "text-blue" : "text-gray"
                  }`}
                >
                  <p className="text-lg font-bold">Shipping Adresse</p>
                </span>
              </button>
              <button
                aria-controls="account"
                type="button"
                className={`before:w-4 before:h-4 before:rounded-full after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:bg-current before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0 ${
                  activeStep === "account" ? "text-blue" : "text-gray"
                }`}
                title="Billing Adresse"
                onClick={() => handleStepClick("account")}
              >
                <span
                  className={`${
                    activeStep === "account" ? "text-blue" : "text-gray"
                  }`}
                >
                  <p className="text-lg font-bold">Billing Adresse</p>
                </span>
              </button>
              <button
                aria-controls="address"
                type="button"
                className={`before:w-4 before:h-4 before:rounded-full after:top-1.25 rounded-0 -indent-330 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 outline-none transition-all ease-linear before:absolute before:top-0 before:left-1/2 before:z-30 before:box-border before:block before:-translate-x-1/2 before:border-2 before:border-solid before:bg-current before:transition-all before:ease-linear before:content-[''] after:absolute after:left-[calc(-50%-13px/2)] after:z-10 after:block after:h-0.5 after:w-full after:bg-current after:transition-all after:ease-linear after:content-[''] sm:indent-0 ${
                  activeStep === "address" ? "text-blue" : "text-gray"
                }`}
                title="Review and Payment"
                onClick={() => handleStepClick("address")}
              >
                <span
                  className={`${
                    activeStep === "address" ? "text-blue" : "text-gray"
                  }`}
                >
                  <p className="text-lg font-bold"> Review and Payment</p>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full  px-3 ">
            {activeStep === "about" && (
              <div id="about" className="step-content">
                <ShippingAdresse setActiveStep={setActiveStep} />
              </div>
            )}

            {activeStep === "account" && (
              <div id="account" className="step-content">
                <BillingAdresse setActiveStep={setActiveStep} />
              </div>
            )}

            {activeStep === "address" && (
              <div id="address" className="step-content container mx-auto">
                <ReviewAndPayment  />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentProcess;
