import React from 'react';

export const Scroll = (props) => {
  return( 
    <div style={{overflowY: 'scroll', overflowX: 'hidden', height:'65vh'}} className="scroll">
      {props.children}
    </div>	
  );
}
