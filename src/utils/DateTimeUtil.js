import * as moment from 'moment';

export const defaultDateFormat = 'DD/MM/YYYY';
export const defaultDateTimeFormat = 'DD/MM/YYYY HH:mm';
export const defaultDateTimeFormatWithSeconds = 'DD/MM/YYYY HH:mm:ss';
export const htmlDateFormatter = 'YYYY-MM-DD';
export const htmlDateTimeFormatter = '"YYYY-MM-DDTHH:MM"';

export const getFormattedDateString = (date, format) => {
    return moment(date).format(format);
};

export const getDefaultFormattedDate = (date /*Moment*/) =>/*string*/ {
    return moment(date).format(defaultDateFormat);
};

export const getDefaultFormattedDateTimeWithSeconds = (date /*Moment*/) =>/*string*/ {
    return moment(date).format(defaultDateTimeFormatWithSeconds);
};

export const getDefaultFormattedDateTime = (date/*Moment*/) =>/*string*/ {
    return moment(date).format(defaultDateTimeFormat);
};

export const getMomentDateFromDateStr = (dateStr /* string*/) => {
    return moment(dateStr, defaultDateFormat);
};

export const getMomentDateFromHtmlDateStr = (dateStr /* string*/) => {
    return moment(dateStr, htmlDateFormatter);
};

export const getMomentDateFromHtmlDateTimeStr = (dateStr /* string*/) => {
    return moment(dateStr, htmlDateTimeFormatter);
};

export const getMonthStartDateStr = (date /*Moment*/) =>/*string*/ {
    return moment(date).startOf('month').format(defaultDateFormat);
};

export const getMonthEndDateStr = (date /*Moment*/) => /*string */ {
    return moment(date).endOf('month').format(defaultDateFormat);
};

export const getJsDate = (date /*string*/) => {
    return this.getMomentDateFromDateStr(date).toDate();
};

export const getJSDateDifference = (date1 /*Date*/, date2 /*Date*/) => {
    return moment(date2).diff(moment(date1), 'days');
};

export const getMomentDateTimeFromString = (date /*Date*/, format) => {
    return moment(date, format);
};

export const getMomentDateFromJSDate = (date /*Date*/) => {
    return moment(date);
};

export const getNow = () =>/*Moment */ {
    return moment();
};

export const getNowDateString = () => {
    return getDefaultFormattedDate(getNow());
};

export const getNowDateTimeString = () => {
    return getDefaultFormattedDateTime(getNow());
};

export const getNowDateTimeWithSecondsString = () => {
    return getDefaultFormattedDateTimeWithSeconds(getNow());
};

export const isSameOrBefore = (fromDate /* string*/, toDate /* string*/) => {
    return this.getMomentDateFromDateStr(fromDate).isSameOrBefore(this.getMomentDateFromDateStr(toDate));
};

export const isSame = (fromDate  /*string*/, toDate  /*string*/) => {
    return this.getMomentDateFromDateStr(fromDate).isSame(this.getMomentDateFromDateStr(toDate));
};

export const isEqualOrBeforeDefaultDateTimeFormatWithSeconds = (fromDate /* String */, toDate /*String */) => {
    return moment(fromDate, defaultDateTimeFormatWithSeconds).isSameOrBefore(moment(toDate, defaultDateTimeFormatWithSeconds));
};

export const getBeforeDate = (days) =>/*Moment */ {
    return moment().subtract(days, 'days');
};

export const getAddDateStr = (date, days) => {
    return moment(date, defaultDateFormat).add(days, 'days').format(defaultDateFormat);
};

export const getAddDate = (date, days) =>/*Moment */ {
    return moment(date, defaultDateTimeFormatWithSeconds).add(days, 'days');
};

export const getAddMins = (date, minutes) =>/*Moment */ {
    return moment(date, defaultDateTimeFormatWithSeconds).add(minutes, 'minutes');
};

export const getMomentDateFromString = (date/* string*/) =>/*Moment */ {
    return moment(date, defaultDateTimeFormatWithSeconds);
};

export const getMomentDateFromDefaultDateTime = (date) => {
    return moment(date, defaultDateTimeFormat);
};

export const getMomentDateFromDateTime = (date, dateFormat) => {
    return moment(date, dateFormat);
};

export const getStartDateStr = (momentDate) => {
    return getDefaultFormattedDate(momentDate) + ' 00:00:00';
};

export const getEndDateStr = (momentDate) => {
    return getDefaultFormattedDate(momentDate) + ' 23:59:59';
};

export const getDateNameString = (dateStr) => {
    return moment(dateStr, defaultDateFormat).format('ddd');
};

export const getDateCustomStringDWOR = (dateStr) => {
    let momentDate = moment(dateStr, defaultDateFormat);
    if (!momentDate.isValid()) {
        return dateStr;
    }
    return moment(dateStr, defaultDateFormat).format('DD/MM');
};

export const isSameOrBetween = (date, fromDate, toDate) => {
    return date.isSame(fromDate)
        || date.isSame(toDate)
        || date.isBetween(fromDate, toDate);
};

export const getJSDateFromDateString = (dateString, format) => {
    return moment(dateString, format).toDate();
};

export const getDateStringFromJSDate = (jsDate, format) => {
    return moment(jsDate).format(format);
};

export const getYearStartDateJS = (year) => {
    return moment(year + ':01:01', 'YYYY:MM:DD').startOf('year').toDate();
};

export const getYearEndDateJS = (year) => {
    return moment(year + ':01:01', 'YYYY:MM:DD').endOf('year').toDate();
};
