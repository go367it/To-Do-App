export const createProject = (data) =>{
    return{
        type: 'CREATEPROJECT',
        payload : {
            data : data
        }
    }
}