function Box({id, width, height, backgroundColor, removeBox}) {
  const myStyles = {
    height: `${height}em`,
    width: `${width}em`,
    backgroundColor: backgroundColor
  }

  function removeThisBox() {
    removeBox(id);
  }

  return (
    <div className="Box">
      <div key={id} id={id} className="Box-actual" style={myStyles}></div>
      <button onClick={removeThisBox}>X</button>
    </div>
  )

}

export default Box
