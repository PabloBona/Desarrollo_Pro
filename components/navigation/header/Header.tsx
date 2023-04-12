import Icon from "../../assets/svg/Icon";

const Header = () => {
  return (
    <div className="bg-black text-white flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm m-0">
      <Icon />
      <div className="flex items-center justify-between px-4 sm:px-12 py-4 min-h-[70px] text-sm gap-4">
       <a className="text-app-blue app-texto-2" href="/create-publication">+ Crear publicacion</a>
       <a className="app-texto-2" href="/login">Log in</a>
       <a className="app-texto-2" href="/sign-up">Sign up</a>
      </div>
    </div>
  );
};

export default Header;
