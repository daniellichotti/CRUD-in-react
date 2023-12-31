import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.form`
    display: flex;

    flex-flow: column wrap;

    h1 {
        color: ${(props) => props.theme['gray-300']};
    }

    input {
        width: 15rem;
        height: 1.5rem;
        margin: 0.2rem;
        box-shadow: none;
        border-radius: 5px;

        &::placeholder {
            color: ${(props) => props.theme['gray-500']};
        }
    }

    input:focus {
        /* border: 1px solid ${(props) => props.theme['green-300']}; */
        box-shadow: 2px 2px 2px 1px ${(props) => props.theme['green-300']};
    }

    button {
        width: 150px;
        height: 30px;

        appearance: none;
        background-color: ${(props) => props.theme['green-300']};
        border: 1px solid rgba(27, 31, 35, 0.15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-family: -apple-system, system-ui, 'Segoe UI', Helvetica, Arial,
            sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 6px 16px;
        margin-top: 5px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: middle;
        white-space: nowrap;

        &:hover {
            background-color: ${(props) => props.theme['green-500']};
        }

        &:focus {
            box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
            outline: none;
        }

        &:disabled {
            background-color: ${(props) => props.theme['gray-300']};
            border-color: rgba(27, 31, 35, 0.1);
            color: rgba(255, 255, 255, 0.8);
            cursor: default;
        }
    }
`;
