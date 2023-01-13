import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  padding: 20px;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;
  width: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 24px;
  }
`;
