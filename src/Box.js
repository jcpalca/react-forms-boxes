function Box({id, width, height, backgroundColor}) {
  const myStyles = {
    height: `${height}em`,
    width: `${width}em`,
    backgroundColor: backgroundColor
  }

  return (
    <div key={id} id={id} className="Box" style={myStyles}></div>
  )

}

export default Box
