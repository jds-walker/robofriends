import React from "react";
import { IRobot } from "../../App";
import Card from "../Card/Card";

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={robots[i].id}
            robotEmail={robots[i].email}
            robotName={robots[i].name}
            robotId={robots[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
