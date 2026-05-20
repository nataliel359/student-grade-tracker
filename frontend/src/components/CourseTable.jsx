import { Link } from "react-router-dom";

export default function CourseTable({ courses }) {
    return (
        <div className="table-card">
            <div className="table-header">
                <h2>Courses</h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Code</th>
                        <th>Assessments</th>
                        <th>Grade</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.map(course => (
                        <tr key={course.id}>
                            <td>
                                <b><Link to={`/course${course.id}`}>{course.name}</Link></b>
                            </td>
                            <td>{course.code}</td>
                            <td>{course.assessment_count}</td>
                            <td><b>{Number(course.final_grade).toFixed(1)}%</b></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}