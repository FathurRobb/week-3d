import { memo, useEffect } from "react";

const StudentList = ({students}) => {
    useEffect(() => {
        console.log('Rendered the StudentLists')
    });

    return (
        <ul>
            {students.map(student => {
                return (
                    <li key={`student-${student.name}-${student.age}`}>
                        {student.name} :: {student.age}
                    </li>
                );
            })}
        </ul>
    );
};

export default memo(StudentList);