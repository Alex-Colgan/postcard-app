function Tool (props) {
    const name = props.name;
    const tool = props.tool;

    return (
      <div>
        <h2>My name is {name}.</h2>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );
}

Tool.defaultProps = {
    name: "Designer",
    tool: "Adobe XD"
  }

export default Tool