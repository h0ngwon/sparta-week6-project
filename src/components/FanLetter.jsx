import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const BtnContainer = styled.div`
	margin: 20px;
`;

const HomeBtn = styled.button`
	font-size: 30px;
	padding: 20px;
	color: white;
	border: none;
	background: black;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		background-color: #333847;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1000px;
	height: 800px;
	background-color: #787276;
	border-radius: 20px;
	margin: 20px;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 20%;
	margin: 50px;
    background-color: black;
    padding: 20px;
`;

const ImageContainer = styled.div`
	width: 10rem;
	margin-right: 20px;
    height: 100%;
`;

const UserImage = styled.img`
    height: 100%;
    box-sizing: border-box;
`;

const Nickname = styled.h1`
	font-size: 40px;
	color: white;
`;

const CreatedTime = styled.div`
	color: white;
`;

const WritedContainer = styled.div`
	font-size: 30px;
	color: white;
`;

const ArticleContainer = styled.div`
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 50px;
	width: 50rem;
	height: 20rem;
	border-radius: 20px;
	color: white;
	padding: 20px;
	text-align: center;
	font-size: 24px;
`;

const BtnsContainer = styled.div`
    width: 50%;
	display: flex;
    justify-content: space-between;
`;

const ModifyBtn = styled.button`
    color:white;
    background-color:black;
    font-size: 30px;
    width: 200px;
    border: none;
    border-radius: 50px;
    padding: 20px;
    cursor: pointer;
    &:hover {
        background-color: #333847;
    }
`;
const DeleteBtn = styled(ModifyBtn)`
`;

const FanLetter = ({ workoutData, deleteWorkout }) => {
	const { id } = useParams();
	const filteredData = workoutData.filter((w) => w.id === id)[0];
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("/");
	};
    const deleteWorkoutHandler = (id) => {
        deleteWorkout(id);
        navigateHandler();
    }

	return (
		<Container>
			<BtnContainer>
				<HomeBtn onClick={navigateHandler}>홈으로</HomeBtn>
			</BtnContainer>
			<ContentContainer>
				<Header>
					<ImageContainer>
						<UserImage src={filteredData.avatar}></UserImage>
					</ImageContainer>
					<Nickname>{filteredData.nickname}</Nickname>
					<CreatedTime>
						{new Date(filteredData.createdAt).toLocaleDateString(
							"ko-KR"
						)}{" "}
						{new Date(filteredData.createdAt).toLocaleTimeString(
							"ko-KR"
						)}
					</CreatedTime>
				</Header>
				<WritedContainer>For {filteredData.writedTo}</WritedContainer>
				<ArticleContainer>{filteredData.content}</ArticleContainer>
				<BtnsContainer>
					<ModifyBtn>수정</ModifyBtn>
					<DeleteBtn onClick={() => deleteWorkoutHandler(filteredData.id)}>삭제</DeleteBtn>
				</BtnsContainer>
			</ContentContainer>
		</Container>
	);
};

export default FanLetter;
