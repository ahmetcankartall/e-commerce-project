function ProductCards() {
  return (
    <div className="w-full flex justify-center px-4 "> {/* px-4 ekle */}
      <div className="lg:w-[1124px] w-full max-w-[328px] lg:max-w-none py-20 lg:py-12 gap-8 lg:gap-12 flex flex-col justify-center items-center">
        
        {/* 1. Satır - DÜZELTİLMİŞ */}
        <div className="lg:w-[1048px] w-full flex flex-col lg:flex-row justify-between items-center lg:items-stretch gap-8 lg:gap-0">
          
          {/* Card 1 - DÜZELTİLMİŞ */}
          <div className="border lg:w-[239px] w-full max-w-[348px] lg:h-[488px] h-[615px]">
            <div className="border w-full lg:h-[300px] h-[427px] flex">
                <div className="border w-full lg:h-[300px] h-[427px] flex items-center justify-center">
  <img
          src='https://images.unsplash.com/photo-1768881140772-f49f7555d9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D'
          alt="Blog"
          className="w-full h-full object-cover"
        />
</div>


            </div>
            <div className="border w-full lg:h-[188px] h-[188px] pt-[25px] pb-9 py-6 gap-2.5 flex flex-col justify-center items-center">
              <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center border">
                Graphic Design
              </h5>
              <a href="/shop" className="font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center text-[#737373]">
                Ürün Departmanı
              </a>
              <div className="w-[108px] h-[34px] flex flex-row justify-between items-center">
                <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#BDBDBD]">
                  $16.48
                </h5>
                <h5 className="font-montserrat font-bold text-base leading-6 tracking-[0.1px] text-center text-[#23856D]">
                  $6.48
                </h5>
              </div>
              <div className="lg:w-[82px] h-[16px] w-[83px] flex items-center justify-between">
                <div className="w-3 h-3 rounded-full bg-[#23A6F0]"></div>
                <div className="w-3 h-3 rounded-full bg-[#23856D]"></div>
                <div className="w-3 h-3 rounded-full bg-[#E77C40]"></div>
                <div className="w-3 h-3 rounded-full bg-[#23856D]"></div>
              </div>
            </div>
          </div>
          
          {/* Diğer Card'lar - AYNI YAPI */}
          <div className="border lg:w-[239px] w-full max-w-[348px] lg:h-[488px] h-[615px]"></div>
          <div className="border lg:w-[239px] w-full max-w-[348px] lg:h-[488px] h-[615px]"></div>
          <div className="border lg:w-[239px] w-full max-w-[348px] lg:h-[488px] h-[615px]"></div>
          
        </div>
        
        {/* 2. ve 3. Satırlar - AYNISI */}
        <div className="hidden lg:flex border lg:w-[1048px] lg:h-[488px] lg:justify-between">
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
        </div>
        
        <div className="hidden lg:flex border lg:w-[1048px] lg:h-[488px] lg:justify-between">
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
          <div className="border lg:w-[239px] lg:h-[488px]"></div>
        </div>
        
        {/* Pagination - DÜZELTİLMİŞ */}
        <div className="border lg:w-[1048px] w-full max-w-[328px] lg:h-[100px] h-auto flex justify-center items-center">
          <div className="w-full max-w-[313px] h-[74px] flex rounded-[6.73px] border-[1.35px] border-gray-300 overflow-hidden">
            <button className="flex-1 h-full flex items-center justify-center bg-white text-gray-600 font-semibold font-montserrat text-[14px] hover:bg-gray-50 transition-all border-r border-gray-300">
              First
            </button>
            <button className="flex-1 h-full flex items-center justify-center bg-blue-50 text-blue-700 font-bold font-montserrat text-[16px] hover:bg-blue-100 transition-all border-r border-blue-200">
              1
            </button>
            <button className="flex-1 h-full flex items-center justify-center bg-white text-gray-600 font-medium font-montserrat text-[16px] hover:bg-gray-50 transition-all border-r border-gray-300">
              2
            </button>
            <button className="flex-1 h-full flex items-center justify-center bg-white text-gray-600 font-medium font-montserrat text-[16px] hover:bg-gray-50 transition-all border-r border-gray-300">
              3
            </button>
            <button className="flex-1 h-full flex items-center justify-center bg-white text-gray-600 font-semibold font-montserrat text-[14px] hover:bg-gray-50 transition-all">
              Next
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProductCards;