
import { SET_ROLES,SET_USER,SET_LANGUAGE,SET_THEME} from "../actions/clientActions";

const initialState = {
    user: {},          
    addressList: [],   
    creditCards: [],   
    roles: [],        
    theme: "light",   
    language: "en",    
};


export default function clientReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ROLES:
            // Rol ekle
            return { 
                ...state, 
                roles: action.payload
            };
             case SET_USER:
            // user set et
            return { 
                ...state, 
                user: action.payload
            };
              case SET_LANGUAGE:
            // language set et
            return { 
                ...state, 
                language: action.payload
            };
              case SET_THEME:
            // theme ekşe
            return { 
                ...state, 
                theme: action.payload
            };
            
        default:
            return state;
            
    }
}





// kullanırken dispatch ımport et
// const dispatch = useDispatch( );
//button onClick= {()=>dispatch(logoutUser)}
// action objesini olusturcak bu logout user ve bunu dispatch etmiş olcam