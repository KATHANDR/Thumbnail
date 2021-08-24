import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, Shortcut } from 'video-react';


const Video = () => (
  <div class="video-size" >
    {/* <Hello name="Video React" /> */}
    
    <Player playsInline poster="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sunset_Reeds%2C_North_Shore_Port_Lincoln_-_South_Australia.jpg/1280px-Sunset_Reeds%2C_North_Shore_Port_Lincoln_-_South_Australia.jpg">
      <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  />
      {/* <Shortcut clickable={false} /> */}
    </Player>
  </div>
);

export default Video;
