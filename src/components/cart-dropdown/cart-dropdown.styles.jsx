import styled from "styled-components";

export const CartDropdownDiv = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export const EmptySpan = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
