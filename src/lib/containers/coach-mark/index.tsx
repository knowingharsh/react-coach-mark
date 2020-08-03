import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { ICoachProps, IDimension } from '../../types';
import { CoachUtils, CommonUtils } from '../../utilities';

const CoachMark: React.FC<ICoachProps> = (props) => {

    const [dimension, setDimension] = useState<IDimension | null>(null);

    useEffect(() => {
        if (!(props.activate && props.reference?.current)) return;
        props.reference?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        CoachUtils.dimensionSetter({ reference: props.reference, setDimension });
        const scrollEvent = function () {
            CommonUtils.debounce(CoachUtils.dimensionSetter, 300)({ reference: props.reference, setDimension });
        }
        window.addEventListener('scroll', scrollEvent);
        window.addEventListener('resize', scrollEvent);
        return () => {
            window.removeEventListener('scroll', scrollEvent);
            window.removeEventListener('resize', scrollEvent);
        }
        //eslint-disable-next-line
    }, [props.activate, props.reference?.current]);

    if (!dimension || !props.activate) {
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

export default CoachMark;

