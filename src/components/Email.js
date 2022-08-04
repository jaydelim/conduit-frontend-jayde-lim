import React from "react";

function Email () {
  return (
    <div className="border-slate-300 border rounded-md h-16 flex items-center p-4 text-xl font-light text-stone-400">
      <input type="text" name="email" placeholder="Email" className="focus:outline-none" />
    </div>
  )
}

export default Email;