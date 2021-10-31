const initialState = {
    projects:[]
}

const handleProject = (state = initialState, action) =>{

    switch(action.type){
        case 'CREATEPROJECT': {

            const {data} = action.payload;

            return{
                ...state,
                project: [
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