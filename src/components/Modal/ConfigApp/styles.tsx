import styled from 'styled-components';

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme?.color.primary};
`;

export const SectionSubTitle = styled.h3`
  font-size: 1.0rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme?.color.primary};
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme?.color.secundary};
`;

export const Box = styled.div`
  border-top: 1px solid #e1e1e1;
  padding: 20px 0;
`