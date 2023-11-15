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

const Home = ({workoutData, addWorkout, getMenuWorkout, menuWorkout}) => {
	

	return (
		<Container>
			<Header />
			<Navigation onGetWorkout={getMenuWorkout} />
			<Form onAddWorkout={addWorkout}/>
			<FanLetters workoutData={workoutData} selectedWorkout={menuWorkout}/>
		</Container>
	);
};

export default Home;
