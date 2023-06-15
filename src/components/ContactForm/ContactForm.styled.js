import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;

background-color: rgb(241 241 241);
border: 1px solid rgb(209 201 255);
border-radius: 30px;
padding-bottom: 20px;
padding-top: 20px;
width: 100%;
&:hover{
    box-shadow: 10px 11px 60px -3px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 11px 60px -3px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 11px 60px -3px rgba(0,0,0,0.75);
}
`; 

export const Button = styled.button`
    font-size: 24px;
    font-weight: 700;
    font-family: Cambria;
    color: orangered;
    background-color: white; 
    border: 1px solid;
    border-radius: 15px;
    cursor: pointer;
    text-transform: uppercase;
    width: 200px;
    height: 50px;
    margin: 0 auto;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: white;
        background-color: orangered;
        border-color: none;
    }
`;

export const LabelForm = styled.label`
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;
    margin: 0 auto;
`; 

export const InputForm = styled.input`
    font-family: Cambria;
    font-weight: 400;
    font-size: 24px;
    outline: none;
    border: 2px solid gray;
    border-radius: 15px;
    width: 250px;
    height: 25px;
    margin: 0 auto;
    padding: 8px 12px;
    &:focus{
    border: 3px solid rgba(255, 62, 0, 0.75);
}
`; 

