import { useState } from "react";
import Router from "shared/Router";
import "reset.css";
import dummy from "./fakedata.json";
function App() {
	const [workout, setWorkout] = useState(dummy);

	const addWorkoutHandler = (w) => {
		setWorkout((prevWorkout) => {
			return [...prevWorkout, w];
		});
	};

	return (
		<>
			<Router workoutData={workout} addWorkout={addWorkoutHandler} />
		</>
	);
}

export default App;
