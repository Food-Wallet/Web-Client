import styled from "styled-components";

export const AccordionMenuContainer = styled.div`
    padding-top: 20px;
    border-top: 0.5px solid #868e96;
    
    .title {
        display: flex;
        margin: 0 20px 20px 20px;
        justify-content: space-between;
        align-items: center;
    }

    .titleLink {
        text-decoration: none;
        display: flex;
        color: white;
        align-items: center;

        svg {
            margin-right: 10px;
            font-size: 19px;
        }

        > p {
            margin: 0;
            font-size: 18px;
        }
    }

    .isActive {
        text-decoration: none;
        display: flex;
        color: #ffff9f;
        align-items: center;

        svg {
            margin-right: 10px;
            font-size: 19px;
        }

        > p {
            margin: 0;
            font-size: 18px;
        }
    }
`;