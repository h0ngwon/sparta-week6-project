import Detail from "pages/Detail";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = ({workoutData, addWorkout}) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home workoutData={workoutData} addWorkout={addWorkout}/>} />
                <Route path="/detail:id" element={<Detail workoutData={workoutData}/>} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
