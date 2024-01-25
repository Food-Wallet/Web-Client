import {SalesTitleWrapper} from "./style";

function SalesTitle() {
  return (
    <SalesTitleWrapper>
      <div>
        <div className={"headText"}>매출 관리</div>
        <div className={"underText"}>총 매출: 10,000,000원</div>
      </div>
    </SalesTitleWrapper>
  )
}

export default SalesTitle;