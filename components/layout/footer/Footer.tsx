export function Footer() {
  return (
    <div className='h-[488px] bg-[url("/footer-banner.png")] flex justify-center items-center'>
      <input
        className="px-6 py-[15px] w-full sm:w-[465px] rounded-3xl"
        type={'text'}
        placeholder={'¿Qué quieres ver en tu ciudad?'}
      />
    </div>
  );
}
