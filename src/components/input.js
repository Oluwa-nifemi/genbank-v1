import React from "react"
import { useField } from "formik"
import { classNames } from "../util/functions"

const Input = ({ label, id, name }) => {
  const [field, meta] = useField(id)

  const hasError = meta.error && meta.touched;

  const renderError = () => {
    if(!hasError) return null

    return (
      <span className="text-red font-plex-hebrew text-sm">
        {meta.error}
      </span>
    )
  }

  return (
    <div>
      <label className='text-lg text-white font-plex-hebrew mb-3 flex' htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className={
          classNames(
            "h-18 flex items-center text-lg font-plex-hebrew w-100% pl-4 bg-blue-800 text-white border border-transparent duration-300 outline-none focus:outline-none md-max:h-14",
            hasError ? "border-red" : "focus:border-blue-200"
          )
        }
        name={name}
        value={field.value}
        id={id}
        {...field}
      />
      {renderError()}
    </div>
  )
}

export default Input