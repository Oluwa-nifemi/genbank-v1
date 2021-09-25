import React, { useEffect, useRef, useState } from "react"
import './typewriter.css'
import { classNames } from "../../util/functions"

const options = [
  'Nigeria',
  'South Africa'
]

const wrap = (value, min, max) => {
  if(value > max){
    return min
  }else if(value < min){
    return max
  }else{
    return value
  }
}

const Typewriter = () => {
  const [typeState, setTypeState] = useState({
    removing: true,
    currentText: 'Nigeria',
    currentIndex: 0
  })

  const currentInterval = useRef()

  const interval = 300;

  const countDownWords = () => {
    currentInterval.current = setInterval(
      () => {
        setTypeState(prevState => {
          if(prevState.currentText.length > 0){
            return {
              ...prevState,
              currentText: prevState.currentText.slice(0, -1)
            }
          }else{
            const nextWordIndex = wrap(prevState.currentIndex + 1, 0, options.length - 1);

            clearInterval(currentInterval.current)
            countUpWords()

            return {
              removing: false,
              currentText: options[nextWordIndex][0],
              currentIndex: nextWordIndex
            }
          }
        })
      },
      interval
    )
  }

  const countUpWords = () => {
    currentInterval.current = setInterval(
      () => {
        setTypeState(prevState => {
          const currentWord = options[prevState.currentIndex];

          if(prevState.currentText === currentWord){
            clearInterval(currentInterval.current)
            setTimeout(() => {
              countDownWords()

              setTypeState(prevState => ({
                ...prevState,
                removing: true,
                currentText: currentWord.slice(0, -1),
              }))
            }, 2000)

            return prevState
          }else{
            return {
              ...prevState,
              currentText: currentWord.slice(0, prevState.currentText.length + 1)
            }
          }
        })
      },
      interval
    )
  }

  useEffect(() => {
    countDownWords()
    return () => {
      clearInterval(currentInterval.current)
    }

    //eslint-disable-next-line
  }, [])

  const blinkCursor = options[typeState.currentIndex] === typeState.currentText;

  return (
    <p className='inline-flex items-stretch leading-none'>
      <span className='text-blue-200 italic'>
        {typeState.currentText}
      </span>
      <span className={classNames('inline-block border-l border-white ml-2', blinkCursor && 'blinking-cursor')}/>
    </p>
  )
}

export default Typewriter