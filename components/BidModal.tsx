import { BidModal } from "@reservoir0x/reservoir-kit-ui";

export const RkBidModal = () => (
  <BidModal
    trigger={
      <button className="text-white bg-[#6E56CF] py-2 px-3 rounded-md">
        Place Bid Example
      </button>
    }
    collectionId="0x66Deb6cC4d65dc9CB02875DC5E8751d71Fa5D50E"
    onBidComplete={(data) => {
      console.log("Bid Complete", data);
    }}
    onBidError={(error, data) => {
      console.log("Bid Transaction Error", error, data);
    }}
    onClose={(data, stepData, currentStep) => {
      console.log("BidModal Closed");
    }}
  />
);
