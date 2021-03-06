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
                new Date(Date.now() - 864e5),
                {
                    before: today
                   React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library[3] for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.[4][5][6] React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing.[7][8] React Router[9] is an example of such a library.u
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