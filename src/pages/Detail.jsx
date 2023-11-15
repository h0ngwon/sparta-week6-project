import FanLetter from "components/FanLetter";
import React from "react";

const Detail = ({ workoutData, deleteWorkout, modifyWorkout }) => {
	return (
		<FanLetter
			workoutData={workoutData}
			deleteWorkout={deleteWorkout}
			modifyWorkout={modifyWorkout}
		/>
	);
};

export default Detail;
