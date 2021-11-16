const initialState = {
    projects:[]
}

const handleProject = (state = initialState, action) =>{

    switch(action.type){

        // when user wants to create a new project
        case 'CREATEPROJECT': {

            const {data} = action.payload;

            return{
                ...state,
                projects: [
                    ...state.projects,
                    {
                        data: data,
                    }
                ]
            }
        }

        default: {
            return state
        }

    }

}

export default handleProject