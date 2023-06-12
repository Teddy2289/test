import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  height: 75vh;

  .btn {
    margin-bottom: 10px;
  }
  @media (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px;
  gap: 20px;

  @media (min-width: 768px) {
    width: 80%;
    button {
      width: 70%;
      margin: 0 auto;
    }
  }
`;

export const AccordionItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #47929c;
`;

export const AccordionHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  margin-left: -10px;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionTitle = styled.span`
  color: #47929c;
  margin-right: 10px;
`;
export const Title = styled.h3`
  text-align: center;
  color: #47929c;
  font-size: 28px;
  padding: 26px;
  font-weight: normal;

  @media (min-width: 768px) {
    font-size: 28px;
    margin-top:15px;
    font-weight: 400;
  }
`;

export const AccordionContent = styled.p`
  padding: 10px;
  color: #282c34;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const StyledIcon = styled.div`
  color: ${(props) => (props.isOpen ? "#47929C" : "#C4C4C4")};
  font-size: 20px;
`;
