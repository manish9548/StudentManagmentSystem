import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getStudents } from "../Service/api";

function Students() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await getStudents();

        console.log("ID:", id);
        console.log("DATA:", res.data);

        const found = res.data.find(s => s.id == id); // 👈 important fix
        setStudent(found);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchStudent();
  }, [id]);

  // ❌ agar student nahi mila
  if (!student) {
    return (
      <div className="p-10 text-center text-red-500">
        Student not found ❌
      </div>
    );
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <Link to="/students" className="text-blue-500">
        ← Back
      </Link>

      <div className="bg-white shadow-lg rounded-xl p-6 mt-4">
        <h1 className="text-3xl font-bold">{student.name}</h1>
        <p className="text-gray-600 mt-2">{student.email}</p>

        <div className="mt-4 text-sm text-gray-400">
          ID: {student.id}
        </div>
      </div>
    </div>
  );
}

export default Students;