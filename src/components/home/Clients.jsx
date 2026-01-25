import Vector1 from "../../assets/images/Vector1.png";
import Vector2 from "../../assets/images/Vector2.png";
import Vector3 from "../../assets/images/Vector3.png";
import Vector4 from "../../assets/images/Vector4.png";
import Vector5 from "../../assets/images/Vector5.png";
import Vector from "../../assets/images/Vector.png";

function Clients() {
 
  return (
<section className="w-full  h-[952px] border lg:h-[175px] bg-[#FAFAFA] flex lg:flex-row  justify-center ">
 <div className=" py-16 lg:w-[1050px] h-full flex lg:flex-row flex-col justify-between items-center">
   <div className="lg:max-h-[34px] lg:w-[153px] flex justify-center items-center ">
    <img src={Vector} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px]  flex justify-center items-center">
        <img src={Vector1} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px] flex justify-center items-center">
        <img src={Vector2} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px]  flex justify-center items-center">
        <img src={Vector3} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px]  flex justify-center items-center">
        <img src={Vector4} alt="Logo"  /></div> 
    <div className="lg:min-h-[34px] lg:min-w-[153px] flex justify-center items-center">
        <img src={Vector5} alt="Logo"  /></div> 
    
 </div>
</section>




  );
}
export default Clients