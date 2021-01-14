// import 'date-fns';
import React, {useState} from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';

// const DatePicker = ()  =>{
  
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     const handleDateChange = (date) => {
//         setSelectedDate(date);
//     };


//     return (
//         <MuiPickersUtilsProvider utils={DateFnsUtils}>
//             <Grid container justify="space-around">
//                 <KeyboardDatePicker
//                     margin="normal"
//                     id="date-picker-dialog"
//                     // label=""
//                     format="MM/dd/yyyy"
//                     value={selectedDate}
//                     onChange={handleDateChange}
//                     KeyboardButtonProps={{
//                         'aria-label': 'change date',
//                     }}
//                 />
//             </Grid>
//         </MuiPickersUtilsProvider>
//     );
// }


// // const  DatePickerContainer = () => {

// // }


// export default DatePicker


import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Example() {

    const today = new Date()
    // localStorage.setItem('date', today)
    const [selectedDay, setSelectedDay] = useState(new Date())

    const handleDayClick = (date) => {
        if(date > today) {
            setSelectedDay(date)
            console.log(selectedDay)
        }
    }

    localStorage.removeItem('date')
    localStorage.setItem('date', selectedDay)
   

    return (
        <div>
        <DayPicker
            selectedDays={selectedDay}
            onDayClick={handleDayClick}
            initialMonth={new Date()}
            fromMonth={new Date()}
            disabledDays={[
                {
                    before: new Date(),
                }
            
            ]}
        />
        <p>
        </p>
        </div>
    );
}