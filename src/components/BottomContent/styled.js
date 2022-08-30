import styled from "styled-components";

const BottomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 5.6rem;

    @media (max-width: 1200px) {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }
    @media (max-width: 500px) {
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }
`;

export { BottomWrapper };