import React, { useContext } from 'react';
//import ContextF from './ContextF';
import { UserContext, ChannelContext } from './App1';

export default function ContextE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      User is {user} and channel is {channel}
    </div>
  );
}
