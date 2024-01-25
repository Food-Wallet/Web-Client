import styled from "styled-components";

export const NavbarMenuWrapper = styled.div`
    .menu {
        display: flex;
        margin-right: 20px;
        
        > p:nth-child(1) {
            margin-right: 20px;
            cursor: pointer;    
        }

        > p:nth-child(2) {
            cursor: pointer;
        }
    }
`;