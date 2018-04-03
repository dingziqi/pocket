export function validateNumber(target) {
    target = Number(target);
    if (isNaN(target) || !isFinite(target)) {
        throw new Error('target is not a vaild Number!');
    }
}