export function isDevelop() {
    return process.env.NODE_ENV === 'develop' || typeof process.env.NODE_ENV === 'undefined';
}