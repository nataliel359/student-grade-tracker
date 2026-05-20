import { useEffect, useState } from "react";
import { getCourses } from "../api/coursesApi";
import CourseTable from "../components/CourseTable";
import "../styles/Dashboard.css";

export default function Dashboard() {
    const [courses, setCourses] = useState([]);
    const [showModal, setShowModal] = useState(false);

    async function fetchCourses() {
        const data = await getCourses();
        setCourses(data);
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div className="dashboard">
            <div className="topbar">
                <h1>Student Grade Tracker</h1>
                <button onClick={() => setShowModal(true)}>+ Add Course</button>
            </div>

            <div className="student-card">
                <h3>STUDENT</h3>
                <h1>Alex Johnson</h1>
                <p>Northwood University</p>

                <div className="stats">
                    <div>
                        <span>GPA</span><h1>3.8</h1>
                    </div>
                    <div>
                        <span>COURSES</span><h1>{courses.length}</h1>
                    </div>
                </div>
            </div>

            <CourseTable courses={courses} />

            {showModal && <AddCourseModal close={() => setShowModal(false)} refresh={fetchCourses} />}
        </div>
    );
}