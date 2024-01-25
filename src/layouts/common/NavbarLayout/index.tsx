import {NavbarLayoutWrapper} from "./style";
import NavbarLogo from "../../../components/atoms/common/NavbarLogo";
import NavbarMenu from "../../../components/atoms/common/NavbarMenu";

function NavbarLayout() {
  return (
    <NavbarLayoutWrapper>
      <NavbarLogo />
      <NavbarMenu />
    </NavbarLayoutWrapper>
  );
}

export default NavbarLayout;