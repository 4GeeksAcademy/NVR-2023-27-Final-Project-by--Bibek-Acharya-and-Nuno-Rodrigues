import React, { useState } from "react";

export const CalendarModal = (props) => {
    const { id, service } = props
    const [serviceSelectedDate, setServiceSelectedDate] = useState("");


    const Calendar = () => {
        const cellStyle = {
            textAlign: 'center',
            height: '1.6rrem',
            width: '2.1rem',
            margin: '0px',
            padding: '0px',
            fontSize: '.675rem',
            borderBottom: '.7px solid black',
            borderCollapse: "collapse",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        const containerStyle = {
            display: 'flex',
            flexDirection: 'row',
        };

        const currentDate = new Date();
        const startDate = new Date(
            currentDate.getFullYear(), 
            currentDate.getMonth(), 
            currentDate.getDate() - currentDate.getDay());



        const weekdayAbbreviations = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const weeks = [];
        weeks.push(
            <div key="weekdays" style={containerStyle}>
                {weekdayAbbreviations.map((day, index) => (
                    <div key={index} style={cellStyle}>
                        {day}
                    </div>
                ))}
            </div>
        );

        for (let i = 0; i < 4; i++) {
            const weekStart = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i * 7);
            const week = [];
            for (let j = 0; j < 7; j++) {
                const day = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + j);
                const dayOfMonth = day.getDate();
                const cell = (
                    <div 
                        key={`${i}-${j}`} 
                        style={cellStyle} 
                        onClick={() => setServiceSelectedDate(new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1).toISOString().split('T')[0])}
                    >
                        {dayOfMonth}
                    </div>
                );
                week.push(cell);
            }
            weeks.push(<div key={i} style={containerStyle}>{week}</div>);
        }

        return <div>{weeks}</div>;
    };




    //CalendarModal JSX
    return (
        <>
            <dialog data-modal className="container-fluid vw-100">
                <div>
                    <Calendar />
                </div>
                <div>
                    Service date: {serviceSelectedDate}
                </div>
                <div>
                    <form method="dialog">
                        <button>OK</button>;
                    </form>

                    <input className="expand-toggle" id="expand-toggle" type="checkbox" />
                    <label htmlFor="expand-toggle" className="expand-label">Toggle</label>
                    <div className="expand-content">
                        Invisible content to expand
                    </div>
                </div>
            </dialog>

        </>

    );
}