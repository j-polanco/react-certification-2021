import styled from 'styled-components';

const Button = styled.button`
    background: transparent;
    border: 5px;
    font-size: ${(props) => props.size};
    cursor: pointer;
    color: #f0eeee;
`;

export default Button;
