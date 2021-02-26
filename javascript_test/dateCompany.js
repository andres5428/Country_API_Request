
/**
 * Date data
 */
const dateData = [
    {
        date: '05/08/2018'
    }, {
        date: '05/03/2015'
    },
    {
        date: '2012/01/28'
    },
    {
        date: '2013/04/21'
    },
    {
        date: '2014/09/02'
    },
    {
        date: '05/september/2005'
    },
    {
        date: '12/january/2007'
    },
    {
        date: '20/july/2000'
    },
    {
        date: '22/june/1999'
    },
    {
        date: '25/november/2017'
    },
]

/**
 * @method dateIdentifier
 * @description Identifies the date provided and returns the day number of the year
 * @param {dateData} array
 */

const dateIdentifier = (dateData) => {
    let dayNumber = [];
    dateData.map((eachDate) => {
        const actualDate = new Date(eachDate.date);
        const start = new Date(actualDate.getFullYear(), 0, 0);
        const difference = (actualDate - start) + ((start.getTimezoneOffset() - actualDate.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(difference / oneDay);
        dayNumber.push(day);
        console.log(`Día del año: ${day} de la fecha: ${eachDate.date}`)
    })
    console.log(dayNumber)
}

dateIdentifier(dateData);