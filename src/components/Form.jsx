import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Container = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 700px;
	background-color: #24506e;
	border-radius: 30px;
	padding: 20px;
`;

const NicknameContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 10px;
`;

const NicknameLabel = styled.label`
	font-size: 20px;
	margin-right: 20px;
	color: white;
`;

const Nickname = styled.input`
	font-size: 20px;
	padding: 10px;
	border-radius: 15px;
	border: none;
`;

const ContentContainer = styled.div`
	margin: 10px;
	display: flex;
	align-items: center;
`;

const ContentLabel = styled.label`
	font-size: 20px;
	margin-right: 20px;
	color: white;
`;

const Content = styled.textarea`
	font-size: 20px;
	border-radius: 20px;
	padding: 20px;
	resize: none;
`;

const SelectContainer = styled.div`
	margin: 10px;
	display: flex;
	align-items: center;
`;

const SelectLabel = styled.label`
	font-size: 20px;
	margin-right: 20px;
	color: white;
`;

const Select = styled.select`
	font-size: 20px;
	border-radius: 20px;
`;

const Btn = styled.button`
	font-size: 30px;
	margin: 10px;
	color: white;
	background-color: black;
	border: none;
	border-radius: 20px;
	padding: 20px;
	cursor: pointer;
`;

const Form = ({ onAddWorkout }) => {
	const [nickname, setNickname] = useState("");
	const [content, setContent] = useState("");
	const [workout, setWorkout] = useState("스쿼트");

	const nicknameHandler = (e) => {
		setNickname(e.target.value);
	};

	const contentHandler = (e) => {
		setContent(e.target.value);
	};

	const workoutHandler = (e) => {
		setWorkout(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const data = {
			createdAt: new Date().toISOString(),
			nickname,
			avatar: "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg",
			content,
			writedTo: workout,
			id: uuid(),
		};

		if (nickname.trim() === "") {
			alert("Please enter a nickname");
			return;
		}

		if (content.trim() === "") {
			alert("Please enter a content");
			return;
		}

		onAddWorkout(data);

		setNickname("");
		setContent("");
	};

	return (
		<Container>
			<NicknameContainer>
				<NicknameLabel>닉네임 : </NicknameLabel>
				<Nickname
					value={nickname}
					type="text"
					maxLength={20}
					placeholder="20자 내로 입력"
					onChange={nicknameHandler}
					autoFocus
					required={true}
				></Nickname>
			</NicknameContainer>

			<ContentContainer>
				<ContentLabel>내용 : </ContentLabel>
				<Content
					value={content}
					rows={5}
					cols={18}
					placeholder="40자 내로 입력"
					maxLength={40}
					onChange={contentHandler}
					required={true}
				/>
			</ContentContainer>

			<SelectContainer>
				<SelectLabel>운동 선택 : </SelectLabel>
				<Select onChange={workoutHandler} value={workout}>
					<option value="스쿼트" defaultValue={workout}>
						스쿼트
					</option>
					<option value="벤치프레스">벤치프레스</option>
					<option vlaue="데드리프트">데드리프트</option>
					<option value="오버헤드프레스">오버헤드프레스</option>
				</Select>
			</SelectContainer>

			<Btn onClick={submitHandler}>등록</Btn>
		</Container>
	);
};

export default Form;
