import {SalesPageLayoutContainer} from "./style";
import SalesTitle from "../../../../components/atoms/sales/SalesTitle";
import SalesChart from "../../../../components/organisms/sales/SalesChart";
import SalesTable from "../../../../components/organisms/sales/SalesTable";

function SalesPageLayout() {
  return (
    <SalesPageLayoutContainer>
      <SalesTitle />
      <SalesChart />
      <SalesTable />
    </SalesPageLayoutContainer>
  );
}

export default SalesPageLayout;