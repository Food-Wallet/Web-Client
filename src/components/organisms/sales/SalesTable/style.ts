import styled from "styled-components";

export const SalesTableContainer = styled.div`
    padding: 8px;
    height: 70vh;
    overflow: hidden;
    margin-top: 3vw;
    border-radius: 15px;
    background-color: white;

    .scrollContainer {
        height: 100%;
        padding: 4vw;
        padding-top: 1.5vw;
        padding-bottom: 2vw;
        overflow-y: auto;
        box-sizing: border-box;
    }

    /* 웹킷 브라우저용 스크롤바 스타일 */
    .scrollContainer::-webkit-scrollbar {
        width: 5px;
    }

    .scrollContainer::-webkit-scrollbar-thumb {
        background-color: #d9d9d9;
        border-radius: 10px;
    }

    .scrollContainer::-webkit-scrollbar-thumb:hover {
        background-color: #888;
    }
`;