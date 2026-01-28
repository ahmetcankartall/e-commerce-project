import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loginThunk } from "../store/thunks/authThunks";
import { toast } from "react-toastify";

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(
        loginThunk(
          { email: data.email, password: data.password },
          data.rememberMe
        )
      );
      navigate(from);
    } catch  {
      toast.error("Email veya şifre hatalı!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign In
        </h2>

        {/* EMAIL */}
        <div>
          <input
            type="text"
            placeholder="Email"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
              ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            {...register("email", {
              required: "Email zorunlu",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Geçerli bir email gir",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("password", { required: true })}
          />
        </div>

        {/* REMEMBER ME */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded"
              {...register("rememberMe")}
            />
            Remember Me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
