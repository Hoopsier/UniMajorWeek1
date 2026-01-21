function Hello(props) {
  return (
    <div className="greeting">

      <p>Hello, {props.name}!</p>
      <p>{props.msg}</p>
    </div>
  )
}

export default Hello
