import { useState } from "react";

function Box2 (props) {
    const {children} = props;
    const [showContent, setShowContent] = useState(false);
    return (
        <div>
            <h3 className="Box2-Title" onClick={() => setShowContent(!showContent)}>Click Me</h3>
            {
                showContent ?
                <p>Hello World.</p>
                :
                ""
            }
            {children}
        </div>
    )
}
export default Box2;