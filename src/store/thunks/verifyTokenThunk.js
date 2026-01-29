import axios from "axios";
import { setUser } from "../actions/clientActions";

export const verifyTokenThunk = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return; // token yoksa boş geç

  // axios header'ına ekle
  axios.defaults.headers.common["Authorization"] = token;

  axios
    .get("https://workintech-fe-ecommerce.onrender.com/verify")
    .then((res) => {
      const { token: newToken, ...userInfo } = res.data;

      // Redux state'e user info
      dispatch(setUser(userInfo));

      // localStorage'i yeni token ile güncelle
      localStorage.setItem("token", newToken);

      // axios header'ı yeni token ile güncelle
      axios.defaults.headers.common["Authorization"] = newToken;
    })
    .catch(() => {
      // token geçersizse temizle
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    });
};
