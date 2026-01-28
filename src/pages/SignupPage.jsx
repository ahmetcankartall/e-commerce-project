import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function SignupPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);

  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { role_id: 3 },
    mode: "all",
  });

  const selectedRole = Number(watch("role_id")); // watch selected role to conditionally render store fields

   const onSubmit = (data) => {
const payload = { ...data }; // kopyala
    delete payload.confirmPassword; // confirmPassword alanını kaldır
    console.log(payload);
    toast.success("You need to click the link in email to activate your account!");

  };

  /*const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = { ...data };
      delete payload.confirmPassword;

      // if store role selected, nest store fields inside `store` key
      if (selectedRole === 2) {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
        delete payload.store_name;
        delete payload.store_phone;
        delete payload.store_tax_no;
        delete payload.store_bank_account;
      }

      console.log(payload);
      await instance.post("/signup", payload);

      toast.success(
        "You need to click the link in email to activate your account!"
      );
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };*/

  useEffect(() => {
    instance
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.response?.data?.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.name ? "border-red-500" : "border-gray-300"
                }`}
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" },
              })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? "border-red-500" : "border-gray-300"
                }`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password must include uppercase, lowercase, number, and special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-1 font-semibold">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              autoComplete="new-password"
              className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                }`}
              {...register("confirmPassword", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
                  message: "Password must include uppercase, lowercase, number, and special character",
                },
                validate: (value) =>
                  value === watch("password") || "Your passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>


          {/* Role */}
          <div>
            <label className="block mb-1 font-semibold">Role</label>
            {loading ? (
              <p>Loading roles...</p>
            ) : (
              <select
                className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.role_id ? "border-red-500" : "border-gray-300"
                  }`}
                {...register("role_id", { required: "Role is required", setValueAs: Number })}
              >
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            )}
            {errors.role_id && (
              <p className="text-red-500 text-sm">{errors.role_id.message}</p>
            )}
          </div>

          {/* Store Fields (conditionally shown) */}
          {selectedRole === 2 && (
            <>
              <div>
                <label className="block mb-1 font-semibold">Store Name</label>
                <input
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.store_name ? "border-red-500" : "border-gray-300"
                    }`}
                  {...register("store_name", {
                    required: "Store Name is required",
                    minLength: { value: 3, message: "Must be at least 3 characters" },
                  })}
                />
                {errors.store_name && (
                  <p className="text-red-500 text-sm">{errors.store_name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-semibold">Store Phone</label>
                <input
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.store_phone ? "border-red-500" : "border-gray-300"
                    }`}
                  {...register("store_phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^(\+90|0)?[1-9][0-9]{9}$/,
                      message: "Invalid Turkey phone number",
                    },
                  })}
                />
                {errors.store_phone && (
                  <p className="text-red-500 text-sm">{errors.store_phone.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-semibold">Store Tax ID</label>
                <input
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.store_tax_no ? "border-red-500" : "border-gray-300"
                    }`}
                  {...register("store_tax_no", {
                    required: "Tax ID is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: "Invalid Tax ID format",
                    },
                  })}
                />
                {errors.store_tax_no && (
                  <p className="text-red-500 text-sm">{errors.store_tax_no.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-semibold">Store Bank Account</label>
                <input
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.store_bank_account ? "border-red-500" : "border-gray-300"
                    }`}
                  {...register("store_bank_account", {
                    required: "Bank Account is required",
                    pattern: {
                      value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                      message: "Invalid IBAN",
                    },
                  })}
                />
                {errors.store_bank_account && (
                  <p className="text-red-500 text-sm">{errors.store_bank_account.message}</p>
                )}
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 rounded text-white font-semibold transition-colors ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
