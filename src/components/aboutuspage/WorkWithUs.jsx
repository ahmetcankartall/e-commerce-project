import pinkwomen from "../../assets/images/pinkwomen.jpg";

export default function WorkWithUs() {
  return (
    <section className="w-full flex bg-[#2A7CC7] lg:min-h-[636px] min-h-[520px]">
      {/* SOL ALAN */}
      <div className="flex-1 flex flex-col justify-center px-10 lg:px-20 text-white gap-4">
        <h5 className="font-bold text-[40px] leading-12.5 tracking-[0.2px] font-montserrat
">
          Work With Us
        </h5>

        <h1 className="font-bold text-[40px] leading-12.5 tracking-[0.2px] font-montserrat
">
          Now Let’s grow Yours
        </h1>

        <p className="font-normal text-[14px] leading-5 tracking-[0.2px] font-montserrat
">
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>

        <button className="w-[130px] h-[52px] px-6 py-2 border border-white rounded font-bold text-[14px] leading-[22px] tracking-[0.2px] text-center font-montserrat">
          Button
        </button>
      </div>

      {/* SAĞ ALAN */}
      <div className="flex-1 hidden lg:flex items-center justify-center">
        <img
          src={pinkwomen}
          alt="Model"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
