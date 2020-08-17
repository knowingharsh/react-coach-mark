import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ICoachCoreProps, IDimension } from '../../types';
import { CoachUtils, CommonUtils } from '../../utilities';

const CoachMarkCore: React.FC<ICoachCoreProps> = (props) => {

    const [dimension, setDimension] = useState<IDimension | null>(null);

    useEffect(() => {
        if (!(props.activate && props.element)) return;
        props.element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        CoachUtils.dimensionSetter({ element: props.element, setDimension });
        const scrollEvent = function () {
            CommonUtils.debounce(CoachUtils.dimensionSetter, 300)({ element: props.element, setDimension });
        }
        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('resize', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
            window.removeEventListener('resize', scrollEvent);
        }
        //eslint-disable-next-line
    }, [props.activate, props.element]);

    if (!dimension || !props.activate || !props.element) {
        if ((dimension && props.activate) && !props.element) {
            console.error('Ref is not passed properly @Coach-Mark');
        }
        return null;
    }

    const base = <div className="harsh-coach-mark"
        style={{
            top: dimension.topSpace,
            left: dimension.leftSpace,
            height: dimension.height + 10,
            width: dimension.width + 10,
        }}>
    </div>;

    const tip = <div
        className={`hcm-tooltip-base hcm-tooltip-base-${props.tooltip.position}`}
        style={{
            ...CoachUtils.toolTipPlacementCalculator({ dimension, position: props.tooltip.position })
        }}>{props.component}</div>;

    return (
        <>
            {ReactDOM.createPortal(base, document.body)}
            {ReactDOM.createPortal(tip, document.body)}
        </>
    );
};

export default CoachMarkCore;

