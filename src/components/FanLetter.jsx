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
`;

const ImageContainer = styled.div`
	width: 2rem;
    margin-right: 20px;
`;

const UserImage = styled.img`
    width: 100px;
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
`

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
`

const FanLetter = ({ workoutData }) => {
	const { id } = useParams();
	const filteredData = workoutData.filter((w) => w.id === id)[0];
	const navigate = useNavigate();
	const navigateHandler = () => {
		navigate("/");
	};

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
			</ContentContainer>
		</Container>
	);
};

export default FanLetter;
