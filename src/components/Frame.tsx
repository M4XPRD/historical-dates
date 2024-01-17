import styled from 'styled-components';
import frame from '../assets/frame.svg';
import ellipse from '../assets/ellipse.svg';
import verticalColouredBar from '../assets/vertical-coloured-bar.svg';

const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  /* margin-left: 25%; */
  margin-left: 12%;
  margin-right: 12%;

  border: 1px solid rgba(66, 86, 122, .1);
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

  width: 100%;
  height: 100%;
`;

const Ellipse = styled.div`
  width: 530px;
  height: 530px;

  border: 1px solid rgba(66, 86, 122, .1);
  border-radius: 50%;
`;

const VerticalColouredBar = styled.img`
  position: absolute;

  height: 120px;
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
