import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';

function Datepickermod(props) {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const { format } = require('date-fns');

    const handleDateChange = (date) => {
        console.log("Handle Change", date);
        if (date === null || isNaN(date.getTime())) {
            return;
        }
        let dateString = format(date, 'yyyy/MM/dd') + " 12:00:00";
        let newDate = new Date(dateString);
        setSelectedDate(newDate);
        props.dateChanged(newDate);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <KeyboardDatePicker
                className="width100p datepickcust"
                margin="normal"
                id="date-picker-dialog"
                label={props.label}
                format="MM/dd/yyyy"
                maxDate={props.maxDate}
                minDate={props.minDate}
                value={props.value === "" ? selectedDate : props.value}
                inputVariant="outlined"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    );
}
export default Datepickermod;