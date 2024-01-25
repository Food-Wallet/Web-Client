import styled from "styled-components";

export const TableWrapper = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin: 0;
    padding: 0;

    .tableEle {
        margin: 4px 0;
        padding: 4px 5px;
        border-bottom: 2.5px solid #f2f2f2;
        text-align: center;
    }

    /* 테이블 헤더에 대한 스타일 추가 */
    .tableEle th {
        background-color: #f6f5f9;
        padding: 6px 0px;
    }
`;