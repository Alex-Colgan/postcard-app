function Postcard(props) {
  const Text = props.Text;
  const Image = props.Image;

  return (
    <div>
      <h2>Hello from Postcard.</h2>

      <h2>{Text}:</h2>

      <img alt={Text} scr={Image} />

      <div>
        <img
          src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="fruit"
        ></img>
      </div>
    </div>
  );
}

export default Postcard;
