function flatten(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }

    if (typeof value === 'object') {
        const result = {};

        for (const [key, value] of Object.entries(value)) {
            result[key] = flatten(value);
        }
    }

    if (Array.isArray(value)) {
        const result = [];

        for (const item of value) {
            if (Array.isArray(item)) {
                result.push(flatten(item));
            } else {
                result.push(item);
            }
        }

        return result;
    }


}