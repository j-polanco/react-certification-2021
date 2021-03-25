import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useData from '../../states/provider';

const Container = styled.div`
    width: 22%;
    height: 20em;
    border-style: solid;
    margin: 1em;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    float: left;
    background-color: #d47b7b;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const StyledLink = styled(Link)`
    text-decoration: 'none';
`;

const Styled = {
    Link: StyledLink,
};

export { Styled };
export default Container;
