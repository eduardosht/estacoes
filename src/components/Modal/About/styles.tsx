import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme?.color.primary};
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export const StackList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const StackItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;

  svg {
    margin-right: 0.5rem;
    color: ${(props) => props.theme?.color.primary};
  }
`;