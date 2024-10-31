import styled, { css, keyframes } from 'styled-components';

export const scaleAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;

export const Navbar = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.theme?.color.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem;
  border-radius: 10px;
  box-shadow: 0 10px 50px rgba(5, 4, 62, 0.25);
  width: 50px;
  position: fixed;
  z-index: 999;
  top: 10rem;
  left: 1rem; 

  .icon {
    color: ${(props) => props.theme?.color.white};
  }
`;

export const NavbarItem = styled.li`
  &:last-child {
    margin-top: 5rem;
    padding-top: .25rem;
    border-top: 1px solid #363664;
  }

  & + & {
    margin-top: 0.75rem;
  }
`;

export const NavbarLink = styled.a`
  color: #FFF;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;
  position: relative;
  transition: 0.15s ease;
  
  &:hover, &:focus, &.active {
    background-color: #30305a;
    outline: 0;

    span {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const Icon = styled.i`
  font-size: 1.375rem;
`;

export const Tooltip = styled.span`
  position: absolute;
  background-color: #30305a;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  left: calc(100% + 1.5rem);
  transform-origin: center left;
  transform: scale(0);
  opacity: 0;
  transition: 0.15s ease;

  &:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    background-color: #30305a;
    left: -5px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    border-radius: 3px;
  }
`;