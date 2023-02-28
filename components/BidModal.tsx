import { BidModal } from "@reservoir0x/reservoir-kit-ui";

export const RkBidModal = () => (
  <BidModal
    trigger={
      <button className="text-white bg-[#6E56CF] p-2 rounded-md">
        Place Bid Example
      </button>
    }
    collectionId="0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
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
