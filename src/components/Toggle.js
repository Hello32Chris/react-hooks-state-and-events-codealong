import React, { useState } from "react";

function Toggle() {

  const [isOn, setIson] = useState(false)

  function handleClick() {
    setIson((isOn) => !isOn)
  }

  const color = isOn ? "red" : "white"

  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "OFF"  : "ON"}
    </button>
  )
}

export default Toggle;













//---------------THIS IS MY CODE-ALONG ABOE IS MYSELF PRACTICING---------

// import React, { useState } from "react";

// function Toggle() {

//   const [isOn, setIson] = useState(false);

//   function handleClick(){
//     setIson((ison) => !isOn)
//   };

//   return <button onClick={handleClick} >{isOn ? "ON" : "OFF"}</button>;
// }

// export default Toggle;
