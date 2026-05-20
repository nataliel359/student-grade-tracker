import { useParams } from "react-router-dom";
import { getAssessments } from "../api/assessmentsApi";
import { use } from "react";

export default function CoursePage() {
    const { id } = useParams();
    const [data, setData] = useState([]);

    async function fetchAssessments() {
        try {
            const res = await axios.get(`${API}/assessments/${id}`);
            console.log("Course ID:", id);
            console.log("Response:", res.data);
            setData(res.data);
        } catch (err) {
            console.error("Error fetching a course:", err);
        }
    }

    useEffect(() => {
        fetchAssessments();
    }, []);

    if (!data) return <p>Loading...</p>;

    return (
        <div className="course-page">
            <h1>Course Details</h1>

            <div className="grade-card">
                <h2>{Number(data.finalGrade).toFixed(1)}%</h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {data.assessments.map(a => (
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.grade}%</td>
                            <td>{a.weight}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}