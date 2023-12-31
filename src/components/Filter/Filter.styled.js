import styled from "styled-components";

export const LabelFilter = styled.label`
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;

    margin-right: 10px;
`; 

export const InputFilter = styled.input`
    font-family: Cambria;
    font-weight: 400;
    font-size: 24px;
    outline: none;
    border: 2px solid gray;
    border-radius: 15px;
    padding: 8px 12px;
    &:focus {
    border: 3px solid rgba(255, 62, 0, 0.75);
}
`; 
