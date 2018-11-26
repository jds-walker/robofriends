import React from "react";

const Card = ({
  robotEmail,
  robotName,
  robotId
}: {
  robotEmail: string;
  robotName: string;
  robotId: number;
}) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shaddow5">
      <img alt="robots" src={`https://robohash.org/${robotId}?200x200`} />
      <div>
        <h2>{robotName}</h2>
        <p>{robotEmail}</p>
      </div>
    </div>
  );
};

export default Card;
