import React, { useRef, useEffect } from 'react';
import mp3File from '../assets/audio/soundtrack.mp3';

import KonamiAudioStyled from './styled/KonamiAudioStyled';

const KonamiAudio = () => {
  const audioEl = useRef(null);

  useEffect(() => audioEl.current.play(), []);

  return <KonamiAudioStyled ref={audioEl} src={mp3File} type="audio/mpeg" />;
};

export default KonamiAudio;
