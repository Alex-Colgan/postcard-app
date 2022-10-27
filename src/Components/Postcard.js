function Postcard(props) {
  const text = props.text;
  const image = props.image;

  return (
    <div>
      <h2>{text}:</h2>
      <img alt={text} src={image} />
    </div>
  );
}

export default Postcard;
