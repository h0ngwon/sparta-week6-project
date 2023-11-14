import Form from "components/Form";
import Header from "components/Header";
import Navigation from 'components/Navigation';
import React from "react";
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Home = () => {
	return (
		<Container>
			<Header />
			<Navigation />
			<Form />
			<main>
                <Outlet/>
            </main>
		</Container>
	);
};

export default Home;
