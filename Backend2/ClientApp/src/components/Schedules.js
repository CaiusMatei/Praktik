import * as React from 'react';
import { useState, useEffect } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Schedule } from '@syncfusion/ej2-react-schedule';
import axios from 'axios';

const Schedules = () => {

    const [scheduleData, setScheduleData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("api/Event/Events");

            const mappedData = response.data.map(item =>  ({
                Id: item.id, 
                Subject: item.course.courseName,
                Location: item.eventLocations.map(location => `${location.location.locationName}\n`),
                Description: item.description +'\n'+   item.eventTeachers.map(teacher => `${teacher.teacher.firstName}  ${teacher.teacher.lastName}\n`),
                StartTime: item.startTime,
                EndTime: item.endTime
            }));

            setScheduleData(mappedData)
               
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const eventSettings = {dataSource: scheduleData};

    return (

        <ScheduleComponent height='550px' eventSettings={eventSettings} readonly={true} >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
        </ScheduleComponent>

    );
}
export default Schedules;

