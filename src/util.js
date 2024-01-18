import dayjs from "dayjs";
import { STAS } from "./const.js";
const isFired = (worker) => worker.hasOwnProperty('endDate');

const formatDates = (worker) => {
    const startDate = dayjs(worker.startDate);
    const endDate = dayjs(worker.endDate);

    worker.startDate = startDate.format('DD.MM.YYYY');
    worker.endDate = endDate.format('DD.MM.YYYY');
    
    return worker;
}

const countIncompleteMonthDays = (worker) => {

    if (isFired(worker)){
        console.log(typeof Number.parseInt(dayjs(worker.endDate).format('DD'), 10));
    }
};

countIncompleteMonthDays(STAS, '31.01.2024')
