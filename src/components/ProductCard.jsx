export default function ProductCard() {
  return (
    <div className="w-screen h-screen bg-[#ffffff] flex justify-center items-center">
      <div className="w-[389px] h-[664px] md:h-full md:w-full flex flex-col md:flex-row justify-center md:max-w-7xl gap-6 py-16 px-6 md:px-0">

        <div className=" bg-white md:flex-1 h-full overflow-hidden border border-2 border-sky-200 rounded-lg">
  <img
    src="https://images.unsplash.com/photo-1768797767742-353a378404b8?w=600&auto=format&fit=crop&q=60"
    alt="Ürün fotoğrafı"
    className="w-full h-full object-cover"
  />
</div>

        <div className="hidden md:flex md:flex-col bg-white md:flex-[2]  ">

      <nav className="border-b border-gray-200 md:flex md:flex-row " >
  <div className=" md:flex md:flex-row w-full md:justify-between items-center md:p-4">
    <span className="">BESTSELLER PRODUCTS</span>
    <ul className="md:flex md:flex-row gap-16 ">
      <li className="active">Men</li>
      <li>Women</li>
      <li>Accessories</li>
    </ul>
    <div className="">
    <button className="rounded-full">&#8249;</button>
    <button className="rounded-full">&#8250;</button>
  </div>
  </div>

  
</nav>




        <div className="border border-solid md:p-3 md:h-full md:w-full md:flex md:flex-wrap md:mt-8 md:gap-4 ">
          <div className=" p-6 border border-solid">
            <h2 className="text-xl font-bold mb-2">Ürün Adı</h2>
            <p className="text-gray-700 mb-4">Ürün açıklaması buraya gelir.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>

          <div className="p-6 border border-solid">
            <h2 className="text-xl font-bold mb-2">Ürün Adı</h2>
            <p className="text-gray-700 mb-4">Ürün açıklaması buraya gelir.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>
          <div className="p-6 border border-solid">
            <h2 className="text-xl font-bold mb-2">Ürün Adı</h2>
            <p className="text-gray-700 mb-4">Ürün açıklaması buraya gelir.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Ürün Adı</h2>
            <p className="text-gray-700 mb-4">Ürün açıklaması buraya gelir.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Ürün Adı</h2>
            <p className="text-gray-700 mb-4">Ürün açıklaması buraya gelir.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Ürün Adı</h2>
            <p className="text-gray-700 mb-4">Ürün açıklaması buraya gelir.</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">$99.99</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Sepete Ekle
              </button>
            </div>
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}
