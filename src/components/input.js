import React from "react"

const Input = ({ label, value, onChange, id }) => {
  return (
    <div>
      <label className='text-lg text-white font-plex-hebrew mb-3 flex' htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        className="h-18 flex items-center text-lg font-plex-hebrew w-100% pl-4 bg-blue-800 text-white border border-transparent duration-300 outline-none focus:border-blue-200 focus:outline-none md-max:h-14"
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input