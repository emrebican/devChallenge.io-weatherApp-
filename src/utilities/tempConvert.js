export const kelvinToC = (kelvin) => {
    const tempC = kelvin - 273;
    return tempC.toFixed();
}

export const kelvinToF = (kelvin) => {
    const tempF = 1.8 * (kelvin - 273) + 32;
    return tempF.toFixed();
}