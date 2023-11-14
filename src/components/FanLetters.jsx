import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 20px;
	width: 70%;
	height: 100%;
	background-color: black;
	border-radius: 20px;
	border: none;
	color: white;
	padding: 20px;
`;

const CommentContainer = styled.div`
	width: 30rem;
	display: flex;
	flex-wrap: wrap;
	border: 1px solid white;
	margin: 20px;
	padding: 20px;
	border-radius: 20px;
`;

const ImageWrapper = styled.div`
	margin: 20px;
`;

const Image = styled.img`
	width: 4rem;
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`;

const NicknameContainer = styled.div`
	color: white;
	font-weight: bold;
	margin-bottom: 5px;
`;

const CreatedTimeContainer = styled.div`
	color: white;
	margin-top: 5px;
`;

const ContentContainer = styled.div`
    width: 300px;
    background-color: #738290;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
    border: none;
    color:white;
`


const FanLetters = ({ workoutData, selectedWorkout }) => {
	return (
		<Container>
			{workoutData.map((w) => {
				return (
					<CommentContainer key={w.id}>
						<ImageWrapper>
							<Image src={w.avatar} />
						</ImageWrapper>
						<InfoContainer>
							<NicknameContainer>{w.nickname}</NicknameContainer>
							<CreatedTimeContainer>
								{new Date(w.createdAt).toLocaleDateString(
									"ko-KR"
								)}{" "}
								{new Date(w.createdAt).toLocaleTimeString(
									"ko-KR"
								)}
							</CreatedTimeContainer>
                            <ContentContainer>
                                {w.content}
                            </ContentContainer>
						</InfoContainer>
					</CommentContainer>
				);
			})}
		</Container>
	);
};

export default FanLetters;
