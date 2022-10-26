

function Postcard (props) {
    const Text = props.Text;
    const Image = props.Image;
        
    return (
        <div>

            <h2>Hello from Postcard.</h2>

            <h2>{Text}:</h2>

            <img 
            alt={Text} scr={Image} 
            />

        </div>
    )
} 

export default Postcard;