import format from "date-fns/format";

export const todayDate = () => {
    return format(new Date(), "eee d MMM ")
}