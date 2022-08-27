const Clear = "Clear.png";
const Hail = "Hail.png";
const HeavyCloud = "HeavyCloud.png";
const HeavyRain = "HeavyRain.png";
const LightCloud = "LightCloud.png";
const LightRain = "LightRain.png";
const Shower = "Shower.png";
const Sleet = "Sleet.png";
const Snow = "Snow.png";
const ThunderStorm = "ThunderStorm.png";

export const weatherImage = (icon) => {
    switch (icon) {
        case "01d":
        case "01n":
            return Clear;

        case "02d":
        case "02n":
            return HeavyCloud;

        case "03d":
        case "04d":
        case "04n":
            return LightCloud;

        case "09d":
        case "09n":
            return HeavyRain;

        case "10d":
        case "10n":
            return LightRain;

        case "11d":
        case "11n":
            return ThunderStorm;

        case "13d":
        case "13n":
            return Snow;

        default:
            return Clear;
    }
}