import React from 'react';

export const useViewPort = () => {

  const [width, setWidth] = React.useState( window.innerWidth );
  const breakPoint = 600;
  
  React.useEffect(() => {
      const handleWindowResize = () => setWidth( window.innerWidth );
      window.addEventListener( "resize", handleWindowResize );
      return () => window.removeEventListener( "resize", handleWindowResize );
    }, [] );

  return breakPoint > width;

}