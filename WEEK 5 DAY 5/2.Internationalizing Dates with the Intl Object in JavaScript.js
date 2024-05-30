const now = new Date();
console.log(now);

const intDate = new Intl.DateTimeFormat('syr-SY').format(now);
console.log(intDate)

const options = {
    hours: "numeric",
    minutes: "numeric",
    day: "numeric",
    month: "numeric",
    weekday: "long",
    year: "numeric"
}
const intDate = new Intl.DateTimeFormat('en-US', options).format(now);
console.log(intDate)