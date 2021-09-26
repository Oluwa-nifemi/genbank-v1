import React, { useState } from "react"
import DownIcon from "../assets/images/down.inline.svg"
import countriesWithISO from "../util/phoneInputData"
import { classNames } from "../util/functions"
import { AsYouType }  from 'libphonenumber-js'
import { useField } from "formik"
import UMFlag from "../assets/images/flags/UM.inline.svg"
import Flags from "country-flag-icons/react/3x2"

const Option = ({ children, onClick, flag: Flag }) => (
  <button
    className="w-100% flex items-center py-3 outline-none bg-blue-600 gap-x-3 px-2 duration-150 hover:bg-blue-700"
    onClick={onClick}
  >
    <Flag className="flex-shrink-0 w-6" />
    <span className="text-sm font-plex-hebrew text-white">
      {children}
    </span>
  </button>
)

const getFlagViaCountryCode = code => Flags[code] || UMFlag

const CountryDropdown = ({ value, onChange }) => {
  const Flag = getFlagViaCountryCode(value.countryCode)
  const [showOptions, setShowOptions] = useState(false)
  //TODO: Hide on click outside
  const toggleShowOptions = () => setShowOptions(prevState => !prevState)

  const onChangeCountry = (country) => () => {
    onChange(country)
    toggleShowOptions()
  }

  return (
    <div className="h-100% flex-shrink-0">
      <button onClick={toggleShowOptions} className="flex items-center gap-x-2.5 h-100%">
        <Flag className="flex-shrink-0 w-8" />
        <span className="text-lg font-plex-hebrew text-white">
            {value.ISO}
          </span>
        <DownIcon className="flex-shrink-0" />
      </button>
      <div
        className={
          classNames(
            "absolute top-100% left-0 max-h-56 overflow-auto z-10 duration-300 opacity-1 transform",
            !showOptions && "opacity-0 pointer-events-none translate-y-2"
          )
        }
      >
        {
          countriesWithISO.map(country => (
            <Option
              onClick={onChangeCountry(country)}
              flag={getFlagViaCountryCode(country.countryCode)}
            >
              {country.ISO}
            </Option>
          ))
        }
      </div>
    </div>
  )
}

const PhoneInput = ({ label, id }) => {
  const [field, meta, helpers] = useField(id)

  const onChange = helpers.setValue
  const value = field.value

  const hasError = meta.error && meta.touched;

  const renderError = () => {
    if(!hasError) return null

    return (
      <span className="text-red font-plex-hebrew text-sm">
        {meta.error.number}
      </span>
    )
  }


  const onChangeCountry = (newCountry) => {
    const convertedNumber =  new AsYouType(newCountry.countryCode).input(value.number);

    onChange({
      number: convertedNumber,
      country: newCountry
    })
  }

  const onChangeInput = ({target}) => {
    const convertedNumber =  new AsYouType(value.country.countryCode).input(target.value);

    onChange({
      ...value,
      number: convertedNumber
    })
  }

  return (
    <div>
      <label className="text-lg text-white font-plex-hebrew mb-3 flex" htmlFor={id}>
        {label}
      </label>
      <div className="bg-blue-800 flex items-center px-4 relative md-max:flex-nowrap border border-transparent focus-within:border-blue-200">
        <CountryDropdown
          value={value.country}
          onChange={onChangeCountry}
        />
        <span className="h-14 border-l border-blue-phone-input-border flex ml-5 mr-4 md-max:mx-2.5 md-max:h-10" />
        <input
          className="h-18 flex items-center text-lg font-plex-hebrew flex-grow bg-blue-800 text-white border-none outline-none focus:outline-none md-max:h-14 w-100%"
          id={id}
          value={value.number}
          onChange={onChangeInput}
        />
      </div>
      {renderError()}
    </div>
  )
}

export default PhoneInput
