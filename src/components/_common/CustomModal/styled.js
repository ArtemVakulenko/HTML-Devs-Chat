import styled from 'styled-components';

export const StCustomModal = styled.div`
    width: 25%;
    height: 90%;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: ${({ colors, theme }) => colors[theme].secondary};
    border: 2px solid ${({ colors, theme }) => colors[theme].modal};
    border-radius: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const StModalWrapper = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    background: ${({ colors, theme }) => colors[theme].modalWrapper};
    width: 100%;
    height: 100%;
`;

export const StModalHeader = styled.header`
    padding: 5px;
    width: 100%;
    display: flex;
`;
export const StModalContent = styled.div`
    width:  100%;
    height: calc(100% - 80px);
    padding: 10px;
    display: flex;
    flex-direction: column;
`;
