export function hasEmptyValue(
    obj: { [s: string]: unknown } | ArrayLike<unknown>
) {
    const values = Object.values(obj);

    for (const value of values) {
        if (
            value === undefined ||
            value === null ||
            (typeof value === 'string' && value.trim() === '') ||
            (Array.isArray(value) && value.length === 0)
        ) {
            return true;
        }
    }
    return false;
}

export function hasEmptyValueExcept(
    obj: { [x: string]: undefined; hasOwnProperty: any },
    excludedKey: string
) {
    for (const key in obj) {
        if (key !== excludedKey && obj.hasOwnProperty(key)) {
            if (
                obj[key] === '' ||
                obj[key] === null ||
                obj[key] === undefined
            ) {
                return true;
            }
        }
    }
    return false;
}

export function hasEmptyValueInArray(array: any) {
    for (const obj of array) {
        if (hasEmptyValue(obj)) {
            return true;
        }
    }
    return false;
}
