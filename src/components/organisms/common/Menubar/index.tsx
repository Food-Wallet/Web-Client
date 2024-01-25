import {MenubarContainer} from "./style";
import MemberInfo from "../../../atoms/common/MemberInfo";
import AccordionMenu from "../AccordionMenu";

function Menubar() {
  return (
    <MenubarContainer>
      <MemberInfo />
      <AccordionMenu />
    </MenubarContainer>
  )
}

export default Menubar;