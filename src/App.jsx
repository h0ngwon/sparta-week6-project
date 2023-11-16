import { useState, useEffect } from "react";
import Router from "shared/Router";
import "reset.css";
import dummy from "fakedata.json";

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
			<Router
				workoutData={workout}
                menuWorkout={menuWorkout}
				addWorkout={addWorkoutHandler}
				deleteWorkout={deleteWorkoutHandler}
				modifyWorkout={modifyWorkoutHandler}
				getMenuWorkout={getMenuWorkoutHandler}
			/>
		</>
	);
}

export default App;
