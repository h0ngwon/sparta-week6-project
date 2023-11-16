import { WorkoutContext } from 'context/WorkoutContext';
import React, { useContext, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 50%;
`;

const List = styled.ul`
	background-color: #bebebe;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: 10px;
	border-radius: 50px;
	text-align: center;

	.item {
		color: white;
		cursor: pointer;
		padding: 10px;
		border-radius: 20px;
	}

	.selected {
		background-color: black;
	}
`;

const Navigation = () => {
    const ctx = useContext(WorkoutContext);
	const workouts = ["스쿼트", "벤치프레스", "데드리프트", "오버헤드프레스"];
	const [isActiveIdx, setIsActiveIdx] = useState(0);

	const activeMenuHandler = (index) => {
		setIsActiveIdx(index);
		ctx.getMenuWorkout(workouts[index]);
	};

	return (
		<Container>
			<List>
				{workouts.map((w, idx) => (
					<li
						key={idx}
						className={
							isActiveIdx === idx ? "item selected" : "item"
						}
						onClick={() => activeMenuHandler(idx)}
					>
						{w}
					</li>
				))}
			</List>
		</Container>
	);
};

export default Navigation;
