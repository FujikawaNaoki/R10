import moment from 'moment';

export const formatSecondsToTime = seconds => moment(seconds * 1000).format('h:00 A')
