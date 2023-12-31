import styled from 'styled-components'
import { Form, ErrorMessage } from 'formik';



export const StyledError = styled(ErrorMessage)`
    color: red !important;
`

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 20%;
    border: 1px solid #0059ff;
    border-radius:10px;
    padding: 10px;
    width: 250px;

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
`;








