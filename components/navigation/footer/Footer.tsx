import SearchButton from "../../assets/svg/SearchButton";

export function Footer() {
  return (
    <div className='min-h-[488px] flex justify-center items-center flex-col bg-[url("/footer-banner.png")] bg-cover bg-center app-banner -mt-4 gap-5'>
      <span>
            <input
              className="px-6 py-4 rounded-l-full w-full sm:w-[465px] "
              type="text"
              placeholder="¿Qué quieres ver en tu ciudad?"
            />
            <button className='bg-white rounded-r-full pt-[15.6px] pb-[22.4px] pr-6'>
              <SearchButton/>
            </button>
          </span>
    </div>
  );
}
