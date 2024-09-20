export const RECEIVE_USERS = "RECEIVE_USERS";
// export const ADD_USERS = "ADD_USERS";

export function receiveUsers(users){
    return{
        type: RECEIVE_USERS,
        users,
    }
}

// export function addUsers(username, password, name,avatarURL, user){
//     const newUser ={
//         id: username,
//         password:password,
//         name: name,
//         avatarURL: avatarURL,
//         answers: {},
//         questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r','8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9' ],
//     }
//     return{
//         type: ADD_USERS,
//         user,
//     }
// }