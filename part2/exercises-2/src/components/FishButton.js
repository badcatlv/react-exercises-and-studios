import React from 'react'

export default function FishButton() {
    function onLearnMore() {
        alert("not a fish")
     }
  return (
    <button onClick={onLearnMore}>Learn More</button>
  )
}
