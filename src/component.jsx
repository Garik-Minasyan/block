import React from 'react';

import Block from './block';

function Conteiner () {
  return(
    <div>
     <Block mrops={10} />
     <Block mrops='string' />
     <Block mrops={null} />
     <Block mrops={[]} />
    </div>
  )
}


export default Conteiner;
