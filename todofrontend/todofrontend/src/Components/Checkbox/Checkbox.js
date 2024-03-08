import { useState } from 'react';

const Checkbox = ({ label }) => {
    const [Checked, setChecked] = useState(false);
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" checked={Checked} onChange={() => setChecked(!Checked)}/>
                <span>{label}</span>
            </label>
        </div>
    );
};
export default Checkbox;