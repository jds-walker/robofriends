import React from "react";
import { IRobot } from "../../App";
import Card from "../Card/Card";

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      <Card
        robotEmail={robots[0].email}
        robotName={robots[0].name}
        robotId={robots[0].id}
      />
    </div>
  );
};

export default CardList;
