import { useState, useEffect } from "react";
import Router from "shared/Router";
import dummy from "fakedata.json";
import { WorkoutContext } from "context/WorkoutContext";
import "reset.css";

function App() {
	const [workout, setWorkout] = useState(dummy);
	const [menuWorkout, setMenuWorkout] = useState("");

	useEffect(() => setMenuWorkout("스쿼트"), []);

	const getMenuWorkoutHandler = (workout) => {
		setMenuWorkout(workout);
	};

	const addWorkoutHandler = (data) => {
		setWorkout((prevWorkout) => {
			return [...prevWorkout, data];
		});
	};

	const deleteWorkoutHandler = (id) => {
		const filteredWorkout = workout.filter((w) => w.id !== id);
		setWorkout(filteredWorkout);
	};

	const modifyWorkoutHandler = (data) => {
		const filteredWorkout = workout.filter((w) => w.id !== data.id);
		setWorkout(() => {
			return [...filteredWorkout, data];
		});
	};

	return (
		<>
			<WorkoutContext.Provider
				value={{
					workoutData: workout,
					menuWorkout,
					getMenuWorkout: getMenuWorkoutHandler,
					addWorkout: addWorkoutHandler,
					deleteWorkout: deleteWorkoutHandler,
					modifyWorkout: modifyWorkoutHandler,
				}}
			>
				<Router />
			</WorkoutContext.Provider>
		</>
	);
}

export default App;
