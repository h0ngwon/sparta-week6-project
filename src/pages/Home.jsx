import Form from "components/Form";
import Header from "components/Header";
import Navigation from "components/Navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FanLetters from "components/FanLetters";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Home = ({workoutData, addWorkout}) => {
	const [menuWorkout, setMenuWorkout] = useState("");

	useEffect(() => setMenuWorkout("스쿼트"), []);

	const getMenuWorkoutHandler = (workout) => {
		setMenuWorkout(workout);
	};

    const getCommentIdHandler = (id) => {
        console.log("from home : " + id);
    }

	return (
		<Container>
			<Header />
			<Navigation onGetWorkout={getMenuWorkoutHandler} />
			<Form onAddWorkout={addWorkout}/>
			<FanLetters workoutData={workoutData} selectedWorkout={menuWorkout} getId={getCommentIdHandler}/>
		</Container>
	);
};

export default Home;
