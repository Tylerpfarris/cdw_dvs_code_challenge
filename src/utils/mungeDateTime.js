import moment from 'moment'


export const mungeDateTime = (dateTime) => moment(dateTime, "YYYY MM DD hh:mm:ss").format('M/D/YYYY');