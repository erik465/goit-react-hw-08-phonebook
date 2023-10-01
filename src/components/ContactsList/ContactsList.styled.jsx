import styled from 'styled-components'

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;

    li{
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    }

    li button{
        height: 20px;
        background-color: #0059ff;
        color: #eee;
        border:  none;
        border-radius: 5px;
        padding: 5px;
        display: flex;
        align-content: center;
        justify-content: center;
        text-align: center;
        outline: none;
    }
`