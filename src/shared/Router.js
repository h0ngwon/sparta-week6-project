import Detail from "pages/Detail";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = ({ workoutData, addWorkout, deleteWorkout, modifyWorkout, getMenuWorkout, menuWorkout }) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Home
							workoutData={workoutData}
                            menuWorkout={menuWorkout}
							addWorkout={addWorkout}
                            getMenuWorkout={getMenuWorkout}
						/>
					}
				/>
				<Route
					path="/detail/:id"
					element={
						<Detail
							workoutData={workoutData}
							deleteWorkout={deleteWorkout}
							modifyWorkout={modifyWorkout}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
