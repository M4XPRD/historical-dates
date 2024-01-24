/* eslint-disable max-len */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { CategorySelectionProps } from '../../../types/sliderTypes';
import dotsPositionMapping from '../../../utils/dotsPositionsMapping';
import { categoriesNameMapping } from '../../../utils/slidersData';
import {
  EllipseWrapper,
  Ellipse,
  DotsContainer,
  Dot,
  DotText,
  Line,
  DotCircle,
} from './CategorySelection.styled';

const CategorySelection = ({
  currentCategoryID,
  handleNewCategoryID,
}: CategorySelectionProps) => {
  const dotsContainerRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: dotsContainerRef });

  const updateDotsAngles = (angleRotated: number) => {
    dotsPositionMapping.forEach((dot) => {
      dot.angle = (dot.angle - angleRotated + 360) % 360;
      dot.currentRotation = (dot.currentRotation - angleRotated + 360) % 360;
    });
  };

  const handleDotClick = contextSafe((id: number) => {
    if (id === currentCategoryID) {
      return;
    }

    const targetDot = dotsPositionMapping.find((dot) => dot.id === id);
    const currentDotAngle = 60;
    const targetAngle = targetDot?.angle;

    if (targetAngle !== undefined) {
      let angleToRotate = targetAngle - currentDotAngle;
      if (angleToRotate < -180) {
        angleToRotate += 360;
      } else if (angleToRotate > 180) {
        angleToRotate -= 360;
      }

      gsap.to(dotsContainerRef.current, {
        rotation: `+=${angleToRotate}`,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          handleNewCategoryID(id);
          updateDotsAngles(angleToRotate);
        },
      });
    }
  });

  return (
    <EllipseWrapper>
      <Ellipse>
        <DotsContainer ref={dotsContainerRef}>
          {dotsPositionMapping.map(({
            id, position, angle, currentRotation,
          }) => (
            <Dot
              key={id}
              id={id}
              transform={{ hoverTransform: `rotate(${currentRotation}deg)` }}
              $position={position}
              data-angle={angle}
              className={id === currentCategoryID ? 'active' : ''}
              onClick={() => handleDotClick(id)}
            >
              <DotCircle />
              <DotText>
                {categoriesNameMapping[currentCategoryID]}
              </DotText>
            </Dot>
          ))}
        </DotsContainer>

        <Line />
      </Ellipse>
    </EllipseWrapper>
  );
};
export default CategorySelection;
