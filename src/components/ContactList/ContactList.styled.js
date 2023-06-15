import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`; 

export const Item = styled.li`
    font-family: Cambria;
    font-weight: 500;
    font-size: 24px;
    background-color: rgb(241, 241, 241);
    border: 2px solid rgb(209 201 255);
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    width: 400px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    &:hover{
        box-shadow: 10px 11px 60px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 11px 60px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 11px 60px -3px rgba(0,0,0,0.75);
    }
`; 

export const Button = styled.button`
    cursor: pointer;
    border-radius: 15px;
    border: 2px solid gray;
    padding: 5px;
    text-align: center;
    font-family: Cambria;
    font-weight: 700;
    font-size: 24px;
    &:active, 
    &:hover,
    &:focus {
        background-color: rgba(255, 62, 0, 0.75);
        border: 2px solid rgba(255, 62, 0, 0.65);
        color: white;
        border-color: none;
}`; 

