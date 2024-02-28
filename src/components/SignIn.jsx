import React from "react";
import Input from "./Input.jsx";
import { useForm } from "react-hook-form";
const SignIn = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" flex flex-col lg:flex-row lg:h-[90vh] ">
      <div className=" sm:w-[full] lg:w-[55%] flex flex-col justify-center items-center py-20  lg:items-start lg:pl-52 gap-3">
        <h1 className="text-3xl font-bold ">Get Started With your Account</h1>
        <p className="   ">
          Find your Favourite Food On our platform. Just one step to order your{" "}
          <span>Food</span>
        </p>
      </div>
      <div className="lg:w-[40%] py-6 flex flex-col justify-center items-center ">
        <div className=" bg-slate-400 flex flex-col items-center py-2 rounded-lg">
          <div className=" text-blue-900 font-bold text-3xl">Sign In Form</div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center py-4 rounded-lg "
          >
            <div className="py-6 px-6  ">
              <Input
                label="FullName: "
                placeholder="Enter your fullname"
                type="text"
                {...register("fullname", { required: true })}
              />
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("fullname", { required: true })}
              />
              <Input
                label="Mobile: "
                placeholder="Enter your phone number"
                type="text"
                {...register("fullname", { required: true })}
              />
              <Input
                label="Password: "
                placeholder="Enter your password"
                type="password"
                {...register("fullname", { required: true })}
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-slate-950 text-white rounded-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
