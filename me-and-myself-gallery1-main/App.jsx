
import React from 'react';

const App = () => {
  return (
    <div style={{ backgroundColor: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video controls autoPlay loop style={{ maxWidth: '90%', maxHeight: '90%' }}>
        <source src="/video/full_no_subtitles.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio autoPlay loop src="/audio/bg_music.mp3" />
    </div>
  );
};

export default App;
