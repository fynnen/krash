import React, {useRef, useEffect} from 'react';
import mp3_file from '../assets/audio/soundtrack.mp3';

import KonamiAudioStyled from './styled/KonamiAudioStyled';

export const KonamiAudio = () => {
  const audioEl = useRef(null);

  useEffect(() => audioEl.current.play(), []);

  return <KonamiAudioStyled
          ref={audioEl}
          src={mp3_file}
          type="audio/mpeg"
        />
};

export default KonamiAudio;