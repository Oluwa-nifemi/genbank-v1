import React, { useMemo } from "react"
import CheckedIcon from "../assets/images/checked.inline.svg"
import { v4 as uuid } from "uuid"
import { classNames } from "../util/functions"

const Checkbox = (
  {
    id: idProp = null,
    checked,
    onChange,
    name,
    label,
    disabled
  }
) => {
  const id = useMemo(() => {
    if (idProp) return idProp
    else return `checkbox-${uuid()}`
  }, [idProp])

  return (
    <div
      className={classNames(
        "relative flex items-center",
        disabled && "pointer-events-none"
      )}
    >
      <label
        htmlFor={id}
        className={classNames("flex w-4.5 h-4.5 cursor-pointer box-border border-2 rounded-sm border-white duration-150 flex-shrink-0", checked && "bg-white")}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="hidden"
          name={name}
        />
      </label>
      <CheckedIcon
        className={classNames(
          "pointer-events-none absolute left-0 text-blue-500 fill-current opacity-0 duration-150 flex-shrink-0",
          checked && "opacity-100"
        )}
      />
      {label && (
        <button
          className="text-white ml-5 text-base font-plex-hebrew bg-transparent border-none"
          onClick={onChange}
        >
          {label}
        </button>
      )}
    </div>
  )
}

export default Checkbox
