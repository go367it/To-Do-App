const initialState = {
    projects:[]
}

const handleProject = (state = initialState, action) =>{

    switch(action.type){
        case 'CREATEPROJECT': {
            return{

            }
        }

        default: {
            return state
        }

    }

}

export default handleProject