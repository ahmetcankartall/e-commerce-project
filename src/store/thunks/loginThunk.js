import axios from "axios";
import { setUser, } from "../actions/clientActions";

export const loginThunk = (user, rememberMe) => (dispatch) => {
  return axios
    .post("https://workintech-fe-ecommerce.onrender.com/login", user)
    .then((response) => {
      const { token, ...userInfo } = response.data;

    
      dispatch(setUser(userInfo));

      
      if (rememberMe) {
        localStorage.setItem("token", token);
      }
    })
    .catch((error) => {
      throw error; 
    });
};
