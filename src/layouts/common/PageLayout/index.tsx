import {PageLayoutContainer} from "./style";
import {ReactNode} from "react";

function PageLayout({children}: { children: ReactNode }) {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
}

export default PageLayout;