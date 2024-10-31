import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 0;
  color: ${(props) => props.theme?.color.primary};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: 1px solid ${(props) => props.theme?.color.primary};
  border-radius: 5px;
  background-color: ${(props) => props.theme?.color.background};
  color: ${(props) => props.theme?.color.secundary};
`;

export const SuggestionsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid ${(props) => props.theme?.color.primary};
  color: ${(props) => props.theme?.color.primary};
  border-radius: 5px;
  background-color: ${(props) => props.theme?.color.background};
`;

export const SuggestionItem = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme?.color.background};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme?.color.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #06073cc7;
  }

  &[disabled] {
    background-color: #bfbfbf;
  }
`;