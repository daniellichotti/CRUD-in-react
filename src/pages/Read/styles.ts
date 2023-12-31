import styled from 'styled-components';

export const DivContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
`;

export const TableContainer = styled.table`
    height: 50vh;
    width: 50vw;

    thead {
        background-color: ${(props) => props.theme['gray-700']};
        font-weight: bold;
    }

    tbody {
        background-color: ${(props) => props.theme['gray-600']};

        tr {
            color: white;
        }

        td {
            text-align: center;
            color: white;
        }
    }
`;
