//@unocss-include
export const bgColors = {
    primary: 'text-white bg-blue-500',
    success: 'text-white bg-green-500',
    warning: 'text-white bg-orange-400',
    base: 'bg-base',
    error: 'text-white bg-red-700',
    errorLight: 'text-white bg-red-400',
    loading: 'opacity-70',
    disabled: 'text-gray-50 text-shadow bg-gray-500 base-border',
    transparent: 'bg-transparent',
}

export const sizes = {
    mini: 'text-xs p-1',
    dense: 'text-xs px-2 py-1',
    normal: 'text-sm px-3 py-2',
    big: 'text-base px-3 py-2',
}
export enum modalPosition {
    base = 'b-modal',
    bottom = 'bottom-modal',
    right = 'right-modal',
    left = 'left-modal',
}