const CreateEventPage = () => {
  return (
    <div className="py-12">
      <label className="relative">
        <input
          className="peer px-5 py-3 border border-app-grayDark rounded-3xl outline-none focus:border-app-blue w-full"
          type="text"
        />
        <span className="cursor-text text-base text-app-grayDark peer-active:text-app-blue peer-active:-top-[25px] peer-focus:-top-[25px] peer-focus:text-xs ease-in-out  peer-focus:text-app-blue absolute whitespace-nowrap transition-all duration-200 -top-[4px] left-4 rounded-3xl bg-white px-1 py-1 outline-none">
          Título de la publicación
        </span>
      </label>
    </div>
  );
};

export default CreateEventPage;
