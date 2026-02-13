

import CheckOutSummary from "../checkoutpage/CheckOutSummary";
import PreviousOrderListing from "./PreviousOrderListing";

export default function CheckoutBody() {
  
 

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* SOL */}
        <div className="flex-1">
          <PreviousOrderListing />
          
       

      
        </div>

        {/* SAĞ */}
        <div className="w-full lg:w-[380px]">
          <CheckOutSummary />
        </div>
      </div>
    </div>
  );
}
