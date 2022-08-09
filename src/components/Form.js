import React from "react";

function InputForm (props) {
  return (
    <div className="flex flex-col w-full gap-y-5">
      <div className="border-slate-300 border rounded-md h-16 flex items-center p-4 text-xl font-light text-stone-400">
        <input type="text" name={props.fields} placeholder={props.fields} className="focus:outline-none" />
      </div>
    </div>
  )
}

export default InputForm;