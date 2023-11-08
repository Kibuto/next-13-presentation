import Image from 'next/image';
import React from 'react';

const Card = (props: any) => {
  const { data } = props;
  return (
    <div className="card">
      <Image
        src="https://source.unsplash.com/random/300x200"
        alt="random image"
        width={300}
        height={200}
      />
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
};

export default Card;
