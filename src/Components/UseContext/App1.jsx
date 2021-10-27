import React from 'react';

import ContextC from './ContextC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export default function App1() {
  return (
    <div className="App">
      <UserContext.Provider value={'Lucas'}>
        <ChannelContext.Provider value={'Fortnight'}>
          <ContextC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
