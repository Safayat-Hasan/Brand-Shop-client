import './Toggle.css'

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className='toggle-container'>
            <div>
                <input type="checkbox" id='check' className='toggle' onChange={handleChange} checked={isChecked} />
                <label className='ml-2' htmlFor="check">Dark Mode</label>
            </div>
        </div>
    );
};

export default Toggle;