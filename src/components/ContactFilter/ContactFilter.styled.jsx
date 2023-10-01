import styled from 'styled-components'

export const StyledFilter = styled.div`
    display: flex;
    padding: 0 20px;
    gap: 10px;
    align-items: center;

    p{
        font-size:15px;
        font-weight: bold;
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