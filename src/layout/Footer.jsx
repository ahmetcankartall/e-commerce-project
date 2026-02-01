import { Link } from "react-router";
import { Phone,Mail,MapPin,Instagram,Facebook,Twitter} from 'lucide-react';
export default function Footer() {
  return (
    <footer className="w-full bg-[#252b42] text-white  flex flex-col items-center justify-center border">
      <div className="w-full lg:max-w-[1050px] flex flex-col md:flex-row md:justify-between items-center gap-2 py-10 border">
        <div className="text-center md:text-left max-w-md">
          <p className="text-sm md:text-lg text-white">&copy; Consulting Agency For Your Business</p>
          <p className="text-xs md:text-sm text-white">The quick fox jumps over the lazy dog</p>
        </div>

        <div className="max-w-xs mt-6 md:mt-0 w-full md:w-auto flex justify-start">
         <button className="font-mono bg-cyan-600 text-white w-[160px] h-[53px] md:text-lg rounded hover:bg-cyan-800 transition-colors flex items-center justify-center">
  Contact Us
</button>

        </div>
        
      </div>
      <div className="w-full lg:max-w-[1050px] max-w-[414px] lg:h-[270px]  py-10 flex lg:flex-row flex-col justify-between  ">
      <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Company info</h5>
             <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Carrier
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                     We are Hiring
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Blog
                    </Link>
          
      </div>
        <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Legal</h5>
             <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      About Us
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                     Carrier
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      We are hiring
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Blog
                    </Link>
          
      </div>
        <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Features</h5>
             <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Business marketing
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      User Analytic
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Live Chat
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Unlimited Support
                    </Link>
          
      </div>
        <div className="w-full flex flex-col  max-w-[148px]">
        <h5 className="font-montserrat font-bold">Resources</h5>
             <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      IOS & Android
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Watch a Demo
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      Customers
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      
                    >
                      API
                    </Link>
          
      </div>
    
        <div className="w-full flex flex-col  max-w-[321px]">
        <h5 className="font-montserrat font-bold">Get in Touch</h5>
             <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors flex flex-row gap-4"
                      
                    >
                      <Phone size={24}/>
                      (480) 555-0103
                    </Link>
                 
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors flex flex-row gap-4"
                      
                    >  <MapPin size={24}/>
                      4517 Washington Ave. 
                    </Link>
                    <Link
                      to="/"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors  flex flex-row gap-4"
                      
                    >
                      <Mail size={24}/>
                      About Us
                    </Link>
          
      </div>
        </div>
        <div className=" w-full lg:max-w-[1050px] max-w-[414px] flex lg:flex-row flex-col lg:justify-between lg:gap-0  items-center ">
          <h6 className="flex items-center justify-center  px-10">Made With Love By Finland All Right Reserved </h6>
          <div className="flex flex-row w-[336px] gap-6  justify-center " >
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
    </footer>
  );
}
