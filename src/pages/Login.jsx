// src/pages/SignupPage.jsx
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

const api = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
});

export default function SignupPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { role_id: 3 }, // Customer default
  });

  const selectedRole = watch("role_id");

  // Fetch roles on mount
  useEffect(() => {
    api.get("/roles")
      .then((res) => setRoles(res.data))
      .catch((err) => console.error(err));
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: Number(data.role_id),
      };

      if (data.role_id === "2") {
        payload.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account,
        };
      }

      const response = await api.post("/signup", payload);

      setSuccessMsg(response.data.message);
    } catch (err) {
      if (err.response?.data?.message) {
        setErrorMsg(err.response.data.message);
      } else {
        setErrorMsg("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {errorMsg && <p className="text-red-500 mb-4">{errorMsg}</p>}
        {successMsg && <p className="text-green-500 mb-4">{successMsg}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              {...register("name", { required: true, minLength: 3 })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name must be at least 3 characters.</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/,
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Enter a valid email.</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                Password must be min 8 chars, include upper, lower, number & special char.
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 font-semibold">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">Passwords must match.</p>
            )}
          </div>

          {/* Role select */}
          <div>
            <label className="block mb-1 font-semibold">Role</label>
            <Controller
              name="role_id"
              control={control}
              render={({ field }) => (
                <select {...field} className="w-full border px-3 py-2 rounded">
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* Store fields if role=store */}
          {selectedRole === "2" && (
            <div className="space-y-2">
              <div>
                <label className="block mb-1 font-semibold">Store Name</label>
                <input
                  {...register("store_name", { required: true, minLength: 3 })}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Store Phone</label>
                <input
                  {...register("store_phone", {
                    required: true,
                    pattern: /^(\+90)?[0-9]{10}$/,
                  })}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Tax ID</label>
                <input
                  {...register("store_tax_no", {
                    required: true,
                    pattern: /^T\d{4}V\d{6}$/,
                  })}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">Bank Account (IBAN)</label>
                <input
                  {...register("store_bank_account", {
                    required: true,
                    pattern: /^TR\d{24}$/,
                  })}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded bg-blue-600 text-white font-semibold ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
