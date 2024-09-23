import React from 'react';

const Card = (props: any) => {
  return (
    <div className="border-2 border-white border-solid m-4 max-w-xs p-4">
      <img className="w-32 h-32" src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
