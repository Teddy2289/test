import styled from "styled-components";

export const AccordionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  padding: 30px;
  gap: 20px;

  @media (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
    padding: 30px;

    .buttons {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      button {
        background-color: #f09291;
        border-radius: 10px;
        color: #000000;
        padding: 10px 50px;
        outline: none;
        border: none;
        width: 330px;
        height: 60px;
      }
    }
  }
`;

export const Button = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 20px;

button {
  background-color: #f09291;
  border-radius: 10px;
  color: #000000;
  padding: 10px 50px;
  outline: none;
  color:#000000;
  font-size:16px;
  font-weight:bold;
  border: none;
  width: 100%;
  height: 45px;
}
  @media (min-width: 768px) {

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      button {
        background-color: #f09291;
        border-radius: 10px;
        color: #000000;
        padding: 10px 50px;
        outline: none;
        color:#000000;
        font-size:24px;
        font-weight:bold;
        border: none;
        width: 330px;
        height: 60px;
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 38.5%%;
    height: auto;
    gap:20px;
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
    margin-top: 15px;
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
