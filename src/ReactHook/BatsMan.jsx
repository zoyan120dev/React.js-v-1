import React, { useState } from 'react'

function BatsManArea() {
  const [score, setScore] = useState(0)
  const [sixes, setSixes] = useState(0)

  const handleSingle = () => {
    setScore(score + 1)
  }

  const handleFour = () => {
    setScore(score + 4)
  }

  const handleSix = () => {
    setScore(score + 6)
    setSixes(sixes + 1) // count sixes
  }

  const CongrasMassage = () => {
    if (score >= 100) {
      return `🎉 Congratulations! You scored a Century (${score})`
    } else if (score >= 50) {
      return `👏 Congratulations! You scored a Half-Century (${score})`
    }
    return null
  }

  return (
    <>
      <div>
        <h3>Player: Bangla BatsMan</h3>
        <p>{CongrasMassage()}</p>

        <h1>Score: {score}</h1>
        <p>Sixes: {sixes}</p>

        <button onClick={handleSingle}>Single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    </>
  )
}

export default BatsManArea
