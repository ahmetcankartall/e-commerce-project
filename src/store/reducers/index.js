import { LOGOUT_USER } from "../actions";


const initialState = {
    user:{
        email:""
    },
    title: "counter page",
    counter:0
}


export function reducer(state= initialState,action){
switch(action.type){
case LOGOUT_USER:
    return {...state, user:initialState.user  }
default:
    return state;
}

}





// kullanırken dispatch ımport et
// const dispatch = useDispatch( );
//button onClick= {()=>dispatch(logoutUser)}
// action objesini olusturcak bu logout user ve bunu dispatch etmiş olcam