// Sample code
// Array-based approach
const streamReducer = (state=[], action) => {
	switch (action.type) {
		case EDIT_STREAM:
			return state.map(stream => {
				if (stream.id === action.payload.id) {
					return action.payload;
				} else {
					return stream;
				}
			})
		default:
			return state;
	}
}

// Object-based approach
// Key interpolation syntax
const streamReducer = (state={}, action) => {
	switch (action.type) {
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload }
		default:
			return state;
	}
}