export default function QualitySection() {
  return (
    <div className="pb-8 mt-8 px-6">
      <div className="grid grid-cols-6 gap-x-12 max-w-6xl mx-auto">
        <div className="col-span-6 xl:col-start-2 xl:col-span-4 grid grid-cols-12 sm:grid-cols-6 gap-y-8">
          
          {/* Bahan Baku Segar */}
          <div className="col-span-6 md:col-span-2 flex justify-center gap-x-4 sm:gap-x-8">
            <img
              src="https://boganamaymay.com/storage/images/bahan.png"
              alt="Bahan Baku Segar"
              className="h-8 lg:h-16"
            />
            <div className="font-worksans flex flex-col gap-y-2 text-white">
              <span className="text-sm lg:text-xl font-bold uppercase block">
                Bahan Baku Segar
              </span>
              <p className="text-xs lg:text-lg">Awal Kelezatan Dimulai</p>
            </div>
          </div>

          {/* Halal */}
          <div className="col-span-2 hidden sm:flex flex-col items-center gap-y-6">
            <img
              src="https://boganamaymay.com/storage/images/halal.png"
              alt="Halal Logo"
              className="hidden md:block h-8 lg:h-16 xl:h-24"
            />
            <a href="#section2">
              <img
                src="https://boganamaymay.com/storage/images/home-acc-content-03.png"
                alt="Acc Content"
                className="h-4 xl:h-10"
              />
            </a>
          </div>

          {/* Rempah Pilihan */}
          <div className="col-span-6 md:col-span-2 flex justify-center gap-x-4 sm:gap-x-8">
            <img
              src="https://boganamaymay.com/storage/images/home-acc-content-02.png"
              alt="Rempah Pilihan"
              className="h-9 lg:h-16"
            />
            <div className="font-worksans flex flex-col gap-y-2 text-white">
              <span className="text-sm lg:text-xl font-extrabold uppercase block">
                Rempah Pilihan
              </span>
              <p className="text-xs lg:text-lg">Untuk Cita Rasa Terbaik</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}