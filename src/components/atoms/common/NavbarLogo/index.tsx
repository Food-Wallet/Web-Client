import {NavbarLogoWrapper} from "./style";

function NavbarLogo() {
  return (
    <NavbarLogoWrapper>
      <img className="logo-img" src={process.env.PUBLIC_URL + "/assets/main/nav-logo.png"} alt="" />
    </NavbarLogoWrapper>
  )
}

export default NavbarLogo;