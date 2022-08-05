import React from "react";

function FormBox (props) {
  return (
    <div className="border-slate-300 border rounded-md h-16 flex items-center p-4 text-xl font-light text-stone-400">
      <input type="text" name={props.info} placeholder={props.info} className="focus:outline-none" />
    </div>
  )
}

function InputForm (props) {
  return (
    <div className="flex flex-col w-full gap-y-5">
      {props.fields.map(field => (<FormBox info={field}/>))}
    </div>
  )
}

export default InputForm;