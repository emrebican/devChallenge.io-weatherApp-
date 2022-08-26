import format from "date-fns/format";

export const todayDate = () => {
    return format(new Date(), "eeee d MMM ")
}