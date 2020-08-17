import React from 'react';
import { ICoachCoreProps, ICoachProps } from '../../types';
import CoachMarkCore from './coach-mark';

const CoachMark: React.FC<ICoachProps> = (props) => {

    let element: Element | null = null;
    if (typeof props.reference === 'string') {
        try {
            element = document.querySelector(props.reference) || null;
        } catch (e) { console.error(props.reference + 'is not valid in document.querySelector') }
    } else if (props.reference && props.reference.current) {
        console.log('here')
        element = props.reference.current;
    }
    console.log('here')
    console.log(element, props);
    if (!element) {
        return null;
    }

    const coreProps: ICoachCoreProps = {
        ...props,
        element,
        tooltip: {
            position: props?.tooltip?.position || 'bottom'
        }
    }

    return (
        <>
            <CoachMarkCore {...coreProps} />
        </>
    );
};

export default CoachMark;

