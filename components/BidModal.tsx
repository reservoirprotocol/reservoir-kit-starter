import { BidModal } from "@reservoir0x/reservoir-kit-ui";

export const RkBidModal = () => (
  <BidModal
    trigger={
      <button className="text-white bg-[#6E56CF] py-2 px-3 rounded-md">
        Place Bid Example
      </button>
    }
    collectionId="0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"
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
