import Form from "components/Form";
import Header from "components/Header";
import Navigation from "components/Navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dummy from "../fakedata.json";
import FanLetters from "components/FanLetters";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Home = () => {
	const [workout, setWorkout] = useState(dummy);
	const [menuWorkout, setMenuWorkout] = useState("");

	useEffect(() => setMenuWorkout("스쿼트"), []);

    const addWorkoutHandler = (w) => {
        setWorkout((prevWorkout) => {
            return [...prevWorkout, w];
        })
    }

	const getMenuWorkoutHandler = (workout) => {
		setMenuWorkout(workout);
	};

	return (
		<Container>
			<Header />
			<Navigation onGetWorkout={getMenuWorkoutHandler} />
			<Form onAddWorkout={addWorkoutHandler}/>
			<FanLetters workoutData={workout} selectedWorkout={menuWorkout}/>
		</Container>
	);
};

export default Home;
