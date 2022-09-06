export const locationFormat = (location) => {
    location = location?.split("/")[1].replace("_", " ");
    return location;
}