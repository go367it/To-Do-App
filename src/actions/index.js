export const createProject = (data) =>{
    return{
        type: 'CREATEPROJECT',
        payload : {
            data : data
        }
    }
}

export const deleteProject = (data) =>{
    return{
        type: 'DELETEPROJECT',
        payload : {
            data : data
        }
    }
}