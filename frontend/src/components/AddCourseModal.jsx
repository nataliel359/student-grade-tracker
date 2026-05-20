import { useState } from "react";
import { addCourse } from "../api/coursesApi";
import "../styles/Modal.css";

export default function AddCourseModal({ close, refresh }) {
    const [name, setName] = useState("");
    const [code, setCode] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        await addCourse({ name, code });
        refresh();
        close();
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={close}>x</button>
                <h2>New Course</h2>
                <form onSubmit={handleSubmit}>
                    <label>Course Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                    <label>Course Code</label>
                    <input type="text" value={code} onChange={e => setCode(e.target.value)} required />
                    <button type="submit">Add Course</button>
                </form>
            </div>
        </div>
    );
}