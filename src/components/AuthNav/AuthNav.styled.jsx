import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.div`
    padding: 40px;
    background-color: #0059ff;
    color : #eee;
    display: flex;
    align-items: center;

    h1{
        margin-right: 30px;
    }
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color : #eee;
    margin-right: 100px;
    display: block;
    background-color: #0099ff;
    padding: 10px;
    border-radius:10px;
    font-size: 20px;
    text-align: center;
    transition: 1s;

    &.active{
        background-color: #eee;
        color : #111;
    }

    &:hover{
        background-color: #0d6cac;
    }

    &.active:hover{
        background-color:#eee;
    }
`