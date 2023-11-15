import FanLetter from 'components/FanLetter';
import React from "react";

const Detail = ({ workoutData, deleteWorkout }) => {

	return (
		<FanLetter workoutData={workoutData} deleteWorkout={deleteWorkout}/>
	);
};

export default Detail;
