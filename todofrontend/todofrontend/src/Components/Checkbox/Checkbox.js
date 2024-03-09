import { useState } from 'react';
import { LuAlarmClock } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import './Checkbox.css';

const Checkbox = ({ label }) => {
    const [Checked, setChecked] = useState(false);
    const time_example = "12:00 PM";
    const recursive = <RxLoop />;
    return (
        <div className="checkbox-wrapper">
            <label>
                <div className="checkbox-animation">
                    <input type="checkbox" checked={Checked} onChange={() => setChecked(!Checked)}/>
                    <div className="circle"></div>
                </div>
                <div className="extra">
                    <span>{label}</span>
                    <div className="time"><span className="recursive">{recursive}</span> {time_example} <span className="clock"><LuAlarmClock /></span></div>
                </div>
            </label>
        </div>
    );
};
export default Checkbox;