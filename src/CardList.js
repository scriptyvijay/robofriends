import React from "react";
import Card from "./Card";

// Props Never Modified Them
// State

const CardList = ({ robots }) => {
	const cardComponent = robots.map((user, i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={robots[i].id} />;
	});
	return <div className="tc">{cardComponent}</div>;
};

export default CardList;
