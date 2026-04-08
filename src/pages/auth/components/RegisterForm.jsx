// components/SignupForm.jsx
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../services/slice/authSlice";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state?.auth);

  const onSubmit = (data) => {
    dispatch(signupUser(data));
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-10 bg-white border rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
        />
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
