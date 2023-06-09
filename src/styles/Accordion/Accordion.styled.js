import styled from 'styled-components';
/*
47929C
*/
export const AccordionContainer = styled.div`
  width: 100%;
`;export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 26px;
  gap: 20px;
`;

export const AccordionItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #47929C;
`;

export const AccordionHeader = styled.div`
 
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AccordionTitle = styled.span`
  color: #47929C;
  margin-right: 10px;
`;
export const Title = styled.h3`
  text-align: center;
  color: #47929C;
  font-size: 28px;
  font-weight: normal;
  margin-right: 10px;
`;

export const AccordionContent = styled.p`
  padding: 10px;
  color: #47929C;
  display: ${({isOpen}) => (isOpen ? 'block' : 'none')};
`;

export const StyledIcon = styled.div`
  color: ${(props) => (props.isOpen ? '#47929C' : '#C4C4C4')};
  font-size: 20px;
`;