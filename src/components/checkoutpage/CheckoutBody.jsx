import { useState } from "react";
import { useDispatch } from "react-redux";
import AddressStep from "./AddressStep";
import PaymentStep from "./PaymentStep";
import CheckOutSummary from "./CheckOutSummary";
import { setAddress } from "../../store/actions/shoppingCartActions";

export default function CheckoutBody() {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* SOL */}
        <div className="flex-1">
          {step === 1 && (
            <AddressStep
              onNext={(address) => {
                dispatch(setAddress(address)); // ✅ Redux’a yaz
                setStep(2);                     // ✅ Step 2
              }}
            />
          )}

          {step === 2 && (
            <PaymentStep
              onBack={() => setStep(1)}
            />
          )}
        </div>

        {/* SAĞ */}
        <div className="w-full lg:w-[380px]">
          <CheckOutSummary />
        </div>
      </div>
    </div>
  );
}
