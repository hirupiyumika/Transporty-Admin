import styled from "styled-components";
import {Card} from "react-bootstrap";

export const BodyWrapper = styled.div`
  color: white;
  overflow-x: hidden;
`;

export const Wrapper = styled.div`
  position: relative;
  border: 1rem;
  padding: 3rem !important;
  background: rgb(0, 0, 0, 0.5);
  color: white;
  font-family: sans-serif;
  border-radius: 25px;
  margin: 2%;
`;

export const InputWrapper = styled.input`
    background: rgb(0, 0, 0, 0.1);
    color: white;
    ::placeholder{
      color: rgb(255,255,255,0.7);
    }
    &:focus{
      background: rgb(0, 0, 0, 0.1);
      color: rgb(255,255,255,0.7);
    }
`;


export const CardWrapper = styled(Card)`
    background: rgb(0, 0, 0, 0.1);
    color: white;
    &:focus{
      background: rgb(0, 0, 0, 0.1);
      color: rgb(255,255,255,0.7);
    }
`;

