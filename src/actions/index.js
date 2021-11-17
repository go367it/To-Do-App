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