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

    const deleteWorkoutHandler = (id) => {
        const filteredWorkout = workout.filter(w => w.id !== id)
        setWorkout(filteredWorkout);
    }

	return (
		<>
			<Router workoutData={workout} addWorkout={addWorkoutHandler} deleteWorkout={deleteWorkoutHandler}/>
		</>
	);
}

export default App;
