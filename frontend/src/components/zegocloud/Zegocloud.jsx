import React, { useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import Back from '../common/back/Back';

function randomID(len) {
    let result = '';
    if (result) return result;
    var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
      maxPos = chars.length,
      i;
    len = len || 5;
    for (i = 0; i < len; i++) {
      result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;

  }

  export function getUrlParams(
    url = window.location.href
  ) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }


const Zegocloud = () => {
  
    const [roomid,setRoomid] = useState(localStorage.getItem("vid-link")?localStorage.getItem("vid-link"):false)

    const roomID=roomid
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID = 331608450;
      const serverSecret = "736efb1ae963bb2032a6a3f7c99387f7";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),"Hannah");


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });


  };
  return (
    <>
    <Back/>
       <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
       
    </>
  )
}

export default Zegocloud