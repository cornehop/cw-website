export const monthNames_NL = [
    "Januari",
    "Februari",
    "Maart",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "December"
]

export function formatDate(date: Date){
    return date.getDate() + " " + monthNames_NL[date.getMonth()] + " " + date.getFullYear();
}