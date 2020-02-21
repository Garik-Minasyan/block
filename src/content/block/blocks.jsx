import React from 'react';

import Block from './block';

function Blocks() {
    return(
        <div style={styles.bloksdiv}>
          <Block mrops={10} />
          <Block mrops='string' />
          <Block mrops={null} />
          <Block mrops={[]} />
        </div>
    );
};

const styles = {
  bloksdiv:{
    witdh:'100%',
    height:'300px',
    backgroundColor:'#3A5E94'
  }
}

export default Blocks;