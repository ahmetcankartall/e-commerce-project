import { Link } from "react-router";
import { Phone,Mail,MapPin,Instagram,Facebook,Twitter} from 'lucide-react';
export default function ShopPageFooter() {
  return (
    <footer className="w-full bg-white text-black  flex flex-col items-center justify-center">
      <div className="w-full lg:max-w-[1050px] flex flex-col md:flex-row md:justify-between items-center gap-2 p-10 ">
        <div className="text-center md:text-left max-w-md">
          <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] px-2">BANDAGE</h3>
          
        </div>

        <div className="max-w-xs mt-6 md:mt-0 w-full md:w-auto flex justify-start ">
        <div className="flex flex-row w-[336px] gap-6  justify-end px-4" >
            <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors  flex flex-row gap-4"
                      
                    >
                     <Facebook size={24}/>
                      
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors  flex flex-row gap-4"
                      
                    >
                      <Instagram size={24}/>
                      
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors  flex flex-row gap-4"
                      
                    > <Twitter size={24}/>
                      
                    </Link>
            
             
            

          </div>

        </div>
        
      </div>
      <div className="w-full lg:max-w-[1050px] max-w-[414px] lg:h-[270px]  p-12 flex lg:flex-row flex-col  gap-[20px]">
      <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Company info</h5>
             <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      About Us
                    </Link>
                    <Link
                      to="/"
                     className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      Carrier
                    </Link>
                    <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                     We are Hiring
                    </Link>
                    <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      Blog
                    </Link>
          
      </div>
        <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Legal</h5>
             <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      About Us
                    </Link>
                    <Link
                      to="/"
                   className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                     Carrier
                    </Link>
                    <Link
                      to="/"
                   className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      We are hiring
                    </Link>
                    <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      Blog
                    </Link>
          
      </div>
        <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Features</h5>
             <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      Business marketing
                    </Link>
                    <Link
                      to="/"
                     className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      User Analytic
                    </Link>
                    <Link
                      to="/"
                    className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      Live Chat
                    </Link>
                    <Link
                      to="/"
                     className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      Unlimited Support
                    </Link>
          
      </div>
        <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Resources</h5>
             <Link
                      to="/"
                      className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]
``
"
                      
                    >
                      IOS & Android
                    </Link>
                    <Link
                      to="/"
                   className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      
                    
                      Watch a Demo
                    </Link>
                    <Link
                      to="/"
               className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      
                
                      Customers
                    </Link>
                    <Link
                      to="/"
                      className="text-[#737373] hover:text-blue-700  py-2 transition-colors font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                      API
                    </Link>
          
      </div>
    
        <div className="w-full flex flex-col  max-w-[321px] gap-4 ">
        <h5 className="font-montserrat font-bold">Get in Touch</h5>
        <div className="">
              <div className="flex w-full h-[58px]  border-blue-500 rounded overflow-hidden">
    <input
      type="email"
      placeholder="Your Email"
      className="flex-1 px-4 text-sm outline-none border"
    />

    <button className="bg-[#23a6f0] text-white px-6 font-montserrat font-bold text-[14px] tracking-[0.2px] hover:bg-blue-600 transition">
      Subscribe
    </button>
  </div>
  </div>
          
      </div>
        </div>
        <div className="w-full bg-[#fafafa] flex items-center justify-center h-[74px]">
        <div className=" w-full lg:max-w-[1050px] max-w-[414px] flex lg:flex-row flex-col lg:justify-between lg:gap-0  items-center ">
          <h6 className="flex items-center justify-center px-10 font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Made With Love By Finland All Right Reserved </h6>
          
        </div>
        </div>
    </footer>
  );
}
