import dummy from "../../fakedata.json";

//action values
export const ADD = "WORKOUT/ADD";
export const DELETE = "WORKOUT/DELETE";
export const MODIFY = "WORKOUT/MODIFY";

//action creators
export const add = (data) => {
	return {
		type: ADD,
		payload: data,
	};
};

const initialState = dummy;

const workoutReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.payload];

		default:
			return state;
	}
};

export default workoutReducer;
