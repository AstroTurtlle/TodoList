import { useEffect, useState, useRef } from 'react';
import { LuAlarmClock } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import { useAnimate } from 'framer-motion';
import './Checkbox.css';

const Checkbox = ({ label }) => {
    const [Checked, setChecked] = useState(false);
    const [scope, animate] = useAnimate();
    const circleRef = useRef();
    const time_example = "12:00 PM";
    const recursive = <RxLoop />;
    
    const handleAnimation = async () => {
        await animate(circleRef.current, {scale: 10, opacity: 1}, {type: "tween", duration: 0.35});
        animate(scope.current.parentNode, {y: -10}, {type: "tween", duration: 1});
        animate(scope.current.parentNode, {opacity: 0, duration: 1});
    }

    useEffect(() => {
        if (Checked)
            handleAnimation();
    // eslint-disable-next-line
    }, [Checked])

    return (
        <div className="checkbox-wrapper">
            <label>
                <div className="checkbox-animation" ref={scope}>
                    <input type="checkbox" checked={Checked} onChange={() => setChecked(!Checked) }/>
                    <div className="circle" ref={circleRef}></div>
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