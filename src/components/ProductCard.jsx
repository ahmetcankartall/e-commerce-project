export default function ProductCard() {
  return (
    <div className="w-screen h-screen bg-red-500 flex justify-center items-center">
      <div className="border border-black w-[389px] h-[664px] md:h-full md:w-full flex flex-col md:flex-row justify-center md:max-w-7xl gap-6 py-16 px-6 md:px-0">

        <div className="border border-black bg-white md:flex-1 h-full overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1768797767742-353a378404b8?w=600&auto=format&fit=crop&q=60"
    alt="Ürün fotoğrafı"
    className="w-full h-full object-cover"
  />
</div>

        <div className="hidden md:flex border border-black bg-white md:flex-[2]">
          div 2
        </div>

      </div>
    </div>
  );
}
