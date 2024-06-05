import './ColorPicker.css'

export default function ColorPicker ({ color, setColor }) {
    return (
        <div>
            <input
                type="text"
                autoFocus
                value={color}
                placeholder="color in hex or string"
                onChange={(event) => setColor(event.target.value)}
            />
        </div>
    );
}