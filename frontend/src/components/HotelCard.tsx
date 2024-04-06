import React from 'react';

type Props = {
  name: string;
  image: string;
};

const HotelCard: React.FC<Props> = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt={name} 
          className="rounded-md w-full h-auto object-cover py-10"
      />
      <h1 className="text-2xl font-bold text-gray-800 mt-2 text-center">{name}</h1>
    </div>
  );
};

export default HotelCard;
