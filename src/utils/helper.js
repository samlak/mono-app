export const amountToNaira = (amount) => {
    return (Math.round(amount) / 100).toFixed(2);
};

export const stringToDate = (string) => {
    return string.substring(0, 10);
};