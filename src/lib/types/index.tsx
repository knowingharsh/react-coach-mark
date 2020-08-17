import { MutableRefObject, ReactNode } from "react";

export interface IPositionTypes {
    position: 'left' | 'top' | 'right' | 'bottom'
};

export interface ITooltip extends IPositionTypes {
};

export interface ITooltip extends IPositionTypes {
};

export interface ICoachProps {
    /*
       activate : true | false
   */
    activate: boolean
    /*
        component can be react component
    */
    component: ReactNode,
    /*
        reference can be react ref or an object with current as element or valid css selector
    */
    reference: MutableRefObject<null> | string,
    /*
        default value of position be bottom
    */
    tooltip?: ITooltip
}

export interface ICoachCoreProps {
    activate: boolean
    component: ReactNode,
    element: Element,
    tooltip: ITooltip
}


export interface IDirections {
    top?: number,
    bottom?: number,
    right?: number,
    left?: number
};

export interface IDimension {
    height: number,
    width: number,
    leftSpace: number, rightSpace: number, topSpace: number, bottomSpace: number
}

export interface IDimensionSetter {
    element: Element,
    setDimension: (dimension: IDimension) => void
}

export interface IToolTipPlacement extends IPositionTypes {
    dimension: IDimension
};
