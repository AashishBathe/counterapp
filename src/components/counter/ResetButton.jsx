import './ResetButton.css'

export default function ResetButton({resetCounter}) {
    return (
        <div className="ResetButton">
            <button className="reset"
                onClick={resetCounter}
            >Reset</button>
        </div>
    );
}