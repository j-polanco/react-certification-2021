import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CurrentDiv = styled.div`
    width: 100%;
    height: 10%;
    min-height: 6vh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-radius: 1em;
    border-style: solid 5px;
    background-color: #2183d3;
`;

const StyledLink = styled(Link)`
    padding-left: 0.5em;
    font-size: 0.6em;
`;

const Styled = {
    Link: StyledLink,
};

export { Styled };
export default CurrentDiv;
