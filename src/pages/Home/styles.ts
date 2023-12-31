import styled from 'styled-components';

export const HomeContainer = styled.main`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    a {
        text-decoration: none;
        font-size: 2rem;
        border: none;
        box-shadow: none;
    }

    a:hover {
        color: ${(props) => props.theme['green-300']};
        text-decoration: none;
    }
`;
