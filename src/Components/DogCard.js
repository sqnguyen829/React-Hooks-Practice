import React from 'react';

export default function DogCard(props) {
    console.log("DogCard")
  return (
    <div>
        <h3>{props.dog.name} the { props.dog.breed }</h3>
        <label>{ props.dog.desc }</label>
    </div>
  );
}
