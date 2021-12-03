const initialState = {
  notes: [],
};

const handleNotes = (state = initialState, action) => {
  switch (action.type) {
    case "CREATENOTE": {
      const { data } = action.payload;
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            data: data,
          },
        ],
      };
    }

    case "DELETENOTE": {
        const newList = state.notes.filter(
            (elem) => elem.data.id != action.id
          );
    
          return {
            ...state,
            notes: newList,
          };
    }

    default: {
      return state;
    }
  }
};

export default handleNotes