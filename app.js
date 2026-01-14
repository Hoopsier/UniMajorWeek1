const { format, addDays } = require("date-fns")


const currentDate = new Date()

const formattedDate = format(currentDate, 'MMMM dd, yyyy')
console.log('FormattedDate:', formattedDate)

const futureDate = addDays(currentDate, 7)
console.log('FutureDate:', format(futureDate, 'MMMM dd, yyyy'))

