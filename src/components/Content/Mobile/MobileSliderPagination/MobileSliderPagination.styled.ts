import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  gap: 10px;
`;

export const PaginationDot = styled.li`
  width: 6px;
  height: 6px;

  color: var(--colour-main);

  opacity: 40%;

  cursor: pointer;

  &.active {
    opacity: 1;
    transition: all 0.3s ease-out;
  }
`;
