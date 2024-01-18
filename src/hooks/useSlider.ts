import { useContext } from 'react';
import SliderLogicContext from '../contexts/SliderLogicContext';

const useSlider = () => useContext(SliderLogicContext);

export default useSlider;
