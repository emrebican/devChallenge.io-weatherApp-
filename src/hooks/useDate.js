import { useState, useEffect } from "react";
import format from "date-fns/format";

export const useDate = (date) => {
    const [dateForm, setDateForm] = useState("");

    useEffect(() => {
        formatted();
        // eslint-disable-next-line
    }, []);

    const formatted = () => {

        const formatDate = date
            ? format(new Date(date * 1000), "eee, d MMM")
            : format(new Date(), "eee, d MMM")

        setDateForm(formatDate);
    }
    return dateForm;
}
