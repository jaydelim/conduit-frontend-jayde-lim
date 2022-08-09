import React from "react";
import InputForm from "./Form";

function SignIn () {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-4 pt-12">
        <p className="text-5xl font-light">Sign In</p>
        <p className="text-[#5cb85c] pt-2 text-lg my-2">Need an account?</p>
      </div>

      <div className="flex items-center justify-center px-4">
        <div className="flex flex-col w-[640px] gap-y-5">
          <InputForm fields={"Email"} />
          <InputForm fields={"Password"} />
          <button type="button" className="bg-[#5cb85c] text-white h-16 w-36 rounded-md self-center sm:self-end text-xl">Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;