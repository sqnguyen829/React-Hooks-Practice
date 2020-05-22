import React from 'react';

export default function Counter(props) {
    console.log('Counter')
  return (
    <div>
        {props.counter}
    </div>
  );
}
