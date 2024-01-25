import {SalesTableContainer} from "./style";
import Table from "../../../atoms/common/Table";

function SalesTable() {
  return (
    <SalesTableContainer>
      <div className={"scrollContainer"}>
        <Table />
      </div>
    </SalesTableContainer>
  )
}

export default SalesTable;