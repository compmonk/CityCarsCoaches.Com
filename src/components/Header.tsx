import logo from "../assets/CCC-11.png";

function Header() {
  return (
    <>
      <div className="relative">
        <div className="z-10 fixed top-0 left-0 right-0 bg-transparent">
          <img
            src={logo}
            className="mx-auto object-scale-down h-30 w-36 py-8"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
