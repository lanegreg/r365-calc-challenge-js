import React, { useState } from 'react'
import { Result } from '../src/components'
import { nextEmoji } from '../src/common'
import { calculate } from '../src/common/calculator'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from './logo.svg'
import './App.css'

const App = () => {
  //#region - Hooks
  const [cursorLeftPixels, setCursorLeftPixels] = useState(0)
  const [command, setCommand] = useState('')
  const [results, setResults] = useState([])
  //#endregion - Hooks

  //#region - Private Funcs
  const resetCommandline = () => {
    setCommand('')
    setCursorLeftPixels(0)
  }
  //#endregion - Private Funcs

  //#region - Handlers
  const handleChange = ev => {
    setCommand(ev.target.value)
    let charCount = ev.target.value.length
    let pixels = Math.ceil(charCount / 2) * 12 + Math.floor(charCount / 2) * 11
    setCursorLeftPixels(pixels)
  }

  const handleSubmit = ev => {
    ev.preventDefault()

    // Clear terminal.
    if (command === 'clr') {
      resetCommandline()
      setResults([])

      return
    }

    const result = calculate(command)

    if (result.success) {
      let copyOfResults = [...results]
      if (copyOfResults.length > 4) copyOfResults.shift()

      setResults([
        ...copyOfResults,
        {
          emoji: nextEmoji(),
          command,
          equation: result.equation
        }
      ])
      resetCommandline()
    } else {
      toast(
        <>
          <span
            style={{ fontSize: '1.6rem', margin: '0 4px' }}
            role="img"
            aria-label="emoji"
          >
            🗯️
          </span>
          <em style={{ color: '#ddd', fontSize: '1.2rem' }}> {result.error}</em>
        </>,
        {
          type: toast.TYPE.ERROR
        }
      )
    }
  }
  //#endregion - Handlers

  return (
    <div className="App">
      <header className="App-header">
        <pre>
          <a
            href="https://github.com/lanegreg/r365-calc-challenge-js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo}
              className="App-logo"
              alt="logo"
              title="this code on github"
            />
          </a>
          <span className="step-num">Stretch 3</span>
          <span className="title t-1">- Restaurant365</span>
          <span className="title t-2">- Code Challenge</span>
          {`
================================================================================
USAGE: {add|subtract|multiply|divide} [//[DELIMITER][...]\\n]{n1[,...]} [OPTIONS]

OPTIONS:
  -delim:char      – single char to override delimiter (defaults are ',', '\\n')
  -noneg           – default is to allow negative integers
  -maxint:n        – default is no upper bound

EXAMPLES:
  % add 2,6\\n3              –> 11
  % add 2^6^3 -delim:^      –> 11
  % add 2,-6,3 -noneg       –> 'exception thrown'
  % add 2,11,3 -maxint:10   –> 5
  % add //[**]\\n2**6**3     –> 11
  % add //[**][!!]\\n2**6!!3 –> 11
================================================================================
          `}
        </pre>
        <section className="terminal">
          <form onSubmit={handleSubmit}>
            <div className="cursor">
              <input
                type="text"
                value={command}
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                onChange={handleChange}
              />
              <i style={{ left: cursorLeftPixels }}></i>
            </div>
            <div>
              {[...results].reverse().map((res, idx) => {
                return (
                  <Result
                    key={idx}
                    emoji={res.emoji}
                    command={res.command}
                    equation={res.equation}
                  />
                )
              })}
            </div>
            <input type="submit" style={{ display: 'none' }} value="Submit" />
          </form>
        </section>
      </header>
      <ToastContainer
        autoClose={3500}
        transition={Zoom}
        hideProgressBar={true}
        position={'bottom-right'}
      />
    </div>
  )
}

export default App
