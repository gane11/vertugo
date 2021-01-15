// import 'date-fns';
import React, {useState, useEffect} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { getDate } from '../store/actions/dateAction';



 function DatePicker({date, getDate}) {

    const today = new Date()
    // localStorage.setItem('date', today)
    const [selectedDay, setSelectedDay] = useState(new Date())


    const handleDayClick = (date) => {
        if (date > new Date(Date.now() - 864e5)) {
            setSelectedDay(date)
        }
    }

    localStorage.removeItem('date')
    localStorage.setItem('date', new Date(selectedDay))
   
    useEffect(() => {
        getDate(selectedDay)
    }, [selectedDay])

    return (
        <div>
        <DayPicker
            selectedDays={selectedDay}
            onDayClick={handleDayClick}
            initialMonth={new Date()}
            fromMonth={new Date()}
            disabledDays={[
                {
                    before: today
                    // new Date(Date.now() - 864e5)
                }
            
            ]}
        />
        <p>
        </p>
        </div>
    );
}



 const DatePickerContainer = () => {
    const date = useSelector((state) => state.date)
    const dispatch = useDispatch()

    return (
        <DatePicker
            date={date}
            getDate={(date) => dispatch(getDate(date))}
        />
    )

}

export default DatePickerContainer