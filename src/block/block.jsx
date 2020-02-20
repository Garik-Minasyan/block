import React from 'react';

function Block (props) {

  const color = { color: typeof props.mrops === 'string' ? '#fff' : typeof props.mrops === 'number' ? '#000' : 'grey'};
  const backgroundColor = { backgroundColor: typeof props.mrops === 'string' ? 'green' : typeof props.mrops === 'number' ? 'orange' : '#000'};
  const borderRadius = { borderRadius: typeof props.mrops === 'string' ? '35px' : typeof props.mrops === 'number' ? '40px' : '85px'};

  return(
    <div style={Object.assign({}, styles.block, color, backgroundColor, borderRadius)}>
      {
        typeof props.mrops === 'string'
        ? 'property type is string' : typeof props.mrops === 'number'
        ? 'property type is number' : 'property type is undefind'
      }
    </div>
  );
}

const styles = {
  block: {
    width: '200px',
    height: '200px',
    lineHeight: '200px',
    float: 'left',
    margin: '20px',
    textAlign: 'center'
  }
}

export default Block;
