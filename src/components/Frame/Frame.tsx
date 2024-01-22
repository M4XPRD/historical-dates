import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  margin-left: 12%;
  margin-right: 12%;

  border-left: 1px solid rgba(66, 86, 122, .1);
  border-right: 1px solid rgba(66, 86, 122, .1);
`;

const UpperBlock = styled.div`
  width: 100%;
  height: 45%;
`;

const BottomBlock = styled.div`
  width: 100%;
  height: 55%;
`;

const VerticalBar = styled.div`
  width: 50%;
  height: 100%;

  border-right: 1px solid rgba(66, 86, 122, .1);
`;

const Frame = () => (
  <Wrapper>
    <UpperBlock>
      <VerticalBar />
    </UpperBlock>
    <BottomBlock>
      <VerticalBar />
    </BottomBlock>
  </Wrapper>
);

export default Frame;
