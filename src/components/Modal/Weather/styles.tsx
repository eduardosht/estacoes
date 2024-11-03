import styled from 'styled-components';

export const ClimateDataWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme?.color.primary};
  margin-top: 0;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme?.color.primary};
  margin-bottom: 2rem;
  text-align: justify;
  line-height: 24px;
`;

export const DataSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderData = styled.div`
  display: flex;
  align-items: center;
`;

export const DataItem = styled.div`
  font-size: 1.2rem;
  text-align: center;
  width: 40%;
  box-shadow: 1px 1px 4px 2px #00000038;
  border-radius: 10px;
  background-color: ${(props) => props.theme?.color.primary};
  padding: 5px;
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  color: #eee;
`;

export const SubTitle = styled.h3`
  margin: 0;
  font-size: 12px;
  color: #eee;
`;

export const DataValue = styled.p`
  font-size: 1.7rem;
  color: #eee;
  margin: 0;
  font-weight: 300;
  letter-spacing: -2px;
  text-align: left;
  padding-left: 30px;
`;

export const SelectMonth = styled.select`
  margin-bottom: 2rem;
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme?.color.primary};
  border-radius: 5px;
  background-color: #FFFFFF;
  color: ${(props) => props.theme?.color.secondary};
`;
