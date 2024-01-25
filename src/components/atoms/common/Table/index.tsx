import {TableWrapper} from "./style";

function Table() {
  return (
    <TableWrapper>
      <thead>
      <tr className={"tableEle"}>
        <th className={"tableEle"}>th1</th>
        <th className={"tableEle"}>th1</th>
        <th className={"tableEle"}>th3</th>
        <th className={"tableEle"}>th4</th>
        <th className={"tableEle"}>th5</th>
      </tr>
      </thead>
      <tbody>
      <tr className={"tableEle"}>
        <td className={"tableEle"}>td1</td>
        <td className={"tableEle"}>td1</td>
        <td className={"tableEle"}>td3</td>
        <td className={"tableEle"}>td4</td>
        <td className={"tableEle"}>td5</td>
      </tr>
      </tbody>
    </TableWrapper>
  );
}

export default Table;