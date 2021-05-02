import styled from 'styled-components/macro';

export const Container = styled.div`
  border-bottom: .8rem solid #222;
  padding: 8rem;

  @media (max-width: 600px) {
    padding: 5rem 5vw;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 5rem;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 3rem;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Item = styled.div`
  color: white;
  margin: auto;
  margin-bottom: 1rem;
  max-width: 81.5rem;
  width: 100%;

  &:first-of-type {
    margin-top: 3rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: .1rem;
  font-size: 2.5rem;
  font-weight: normal;
  background: #303030;
  padding: 2.08rem 3.1rem;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 2rem;
    user-select: none;

    @media (max-width: 600px) {
      width: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding: 1.5rem 2rem;
  }
`;

export const Body = styled.div`
  font-size: 2rem;
  font-weight: 100;
  line-height: normal;
  background: #303030;
  white-space: pre-wrap;
  user-select: none;
  overflow: hidden;
  padding: 3rem;

  span {
    display: block;
    padding: 0.8rem 2.2rem 0.8rem 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding: 2rem;
  }
`;
