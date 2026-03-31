import StudentFrom from "../components/StudentFrom"; // Spelling check: 'Form' ya 'From' jo aapne file ka naam rakha ho
import { Link } from 'react-router-dom';

function AddStudent() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-start py-10 bg-gray-50">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Add New Student 📝
          </h2>
          <Link 
            to="/students" 
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1 transition-colors"
          >
            &larr; Back to List
          </Link>
        </div>

        {/* Student Form Component */}
        <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300">
          <StudentFrom />
        </div>
        
      </div>
    </div>
  );
}

export default AddStudent;