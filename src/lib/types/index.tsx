import { MutableRefObject, ReactNode } from "react";

export type IPositionTypes = 'left' | 'top' | 'right' | 'bottom';

export interface ICoachProps {
    activate: boolean
    component: ReactNode,
    reference: MutableRefObject<null> | { current: any },
    tooltip: {
        position: IPositionTypes
    }
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
    reference: MutableRefObject<null> | { current: any },
    setDimension: (dimension: IDimension) => void
}

export interface IToolTipPlacement {
    dimension: IDimension,
    position: IPositionTypes
};
