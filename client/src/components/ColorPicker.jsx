import React from 'react';
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='colorpicker-container'>
      <SketchPicker 
      color={snap.color} 
      disableAlpha 
      onChange={(color) => state.color = color.hex} 
      presetColors={['#000', '#fff', '#a1a1a1', '#b3b3b3']} />
    </div>
  )
}

export default ColorPicker