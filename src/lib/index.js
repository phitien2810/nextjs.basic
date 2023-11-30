import moment from 'moment'
import { DATE_FORMAT } from '../constants'

//whatever utils functions here, for e.g: stringformat, dateformat, numberformat
export function formatDate(o) {
    return moment(o).format(DATE_FORMAT)
}
