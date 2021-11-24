export const createProject = (data) =>{
    return{
        type: 'CREATEPROJECT',
        payload : {
            data : data
        }
    }
}

export const deleteProject = (id) =>{
    return{
        type: 'DELETEPROJECT',
        id
    }
}

export const createNote = (data) =>{
    return{
        type: 'CREATENOTE',
        payload: {
            data : data
        }
    }
}

export const deleteNote = (id) =>{
    return{
        type: 'DELETENOTE',
        id
    }
}