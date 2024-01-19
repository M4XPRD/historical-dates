import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* margin-left: 25%; */
  margin-left: 12%;
  margin-right: 12%;

  border-left: 1px solid rgba(66, 86, 122, .1);
  border-right: 1px solid rgba(66, 86, 122, .1);
`;

const UpperBlock = styled.div`
  width: 100%;
  height: 45%;

  border-bottom: 1px solid rgba(66, 86, 122, .1);
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

const EllipseWrapper = styled.div`
  position: absolute;
  display: inline-block;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ellipse = styled.div`
  width: 30vw;
  height: 30vw;

  max-width: 530px;
  max-height: 530px;
  min-width: 200px;
  min-height: 200px;

  border: 1px solid rgba(66, 86, 122, .2);
  border-radius: 50%;
`;

const Frame = () => (
  <Wrapper>
    <UpperBlock>
      <VerticalBar />
    </UpperBlock>
    <EllipseWrapper>
      <Ellipse />
    </EllipseWrapper>
    <BottomBlock>
      <VerticalBar />
    </BottomBlock>
  </Wrapper>
);

export default Frame;
