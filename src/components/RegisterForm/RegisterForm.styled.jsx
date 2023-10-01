import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 20%;

    label{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    button{
        width: 100px;
        padding: 10px;
        color: #eee;
        border: none;
        outline : none;
        background-color: #0059ff;
        transition: 1s;
    }

    button:hover{
        background-color: #3fa9ff
    }

    input{
        outline : none;
        color: #111;
        border : 1px solid #656161;
        border-radius:10px;
        padding: 5px;
    }

    input:focus{
        border: 1px solid #0059ff
    }
`