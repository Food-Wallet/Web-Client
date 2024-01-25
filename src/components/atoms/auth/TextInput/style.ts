import styled from "styled-components";

export const TextInputWrapper = styled.div`
    .input-text {
        width: 350px;
        height: 50px;
        padding-left: 10px;
        border: 1px solid #d9d9d9;
        border-radius: 12px;
        margin-top: 3px;
        font-size: 15px;

        :focus {
            border-color: #4285f4;
            outline: none;
        }
    }
`;