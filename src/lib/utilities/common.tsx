export function debounce(fn: Function, time: number) {
    let timOut: any = null;
    return function (...args: any) {
        if (timOut) {
            clearTimeout(timOut);
        }
        timOut = setTimeout(() => {
            fn.apply(null, args);
            timOut = null;
        }, time);
    }
}