import {
  Wrapper, UpperBlock, VerticalBar, BottomBlock,
} from './Frame.styled';

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
