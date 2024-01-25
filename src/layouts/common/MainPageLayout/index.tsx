import {MainPageLayoutContainer} from "./style";
import Menubar from "../../../components/organisms/common/Menubar";
import {Outlet} from "react-router-dom";

function MainPageLayout() {
  return (
    <MainPageLayoutContainer>
      <Menubar />
      <div className={"outlet"}>
        <Outlet />
      </div>
    </MainPageLayoutContainer>
  );
}

export default MainPageLayout;