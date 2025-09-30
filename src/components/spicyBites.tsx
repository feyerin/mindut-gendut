const spicyItems = [
  { name: "Bumbu Ungkep", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Ayam Ungkep", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Sambal", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Sambal Lauk", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Sapi", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Kripik Kentang", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Tahu", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Tempe", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
];

export default function SpicyBites() {
  return (
    <div className="py-20 px-6 md:px-12 w-full">
      <div className="w-11/12 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-10">
          Spicy Bites
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {spicyItems.map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center">
              <img
                src={item.img}
                alt={item.name}
                className="w-32 blur-sm h-32 object-cover rounded-xl mb-3"
              />
              <p className="font-medium text-white">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-white rounded-full border border-white hover:border-yellow-300 transition">
            Lihat Menu Lengkap
          </button>
        </div>
      </div>
    </div>
  );
}