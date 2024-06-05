import './Content.css'

const Content = ({ color }) => {
    const contentStyle = {
        backgroundColor: color,
    }
    return (
        <div className="content-box" style={contentStyle}>
            <p style={color === "black" ? { color: "white" } : color === "#000" ? { color: "white" } : color === "#000000" ? { color: "white" } : null}>{color}</p>
        </div>
    );
}

export default Content