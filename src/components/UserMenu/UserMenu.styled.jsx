import styled from 'styled-components'

export const StyledNav = styled.div`
    padding: 40px;
    background-color: #0059ff;
    color : #eee;
    display: flex;
    align-items: center;

    p{
        margin-right: 30px;
        font-size: 30px;
    }

    button{
         text-decoration: none;
        color : #eee;
        margin-right: 100px;
        display: block;
        background-color: #0099ff;
        padding: 10px;
        border-radius:10px;
        font-size: 20px;
        text-align: center;
        border: none;
        outline: none;
        transition: 1s;
    }

    button:hover{
        background-color: #0d6cac;
    }
`