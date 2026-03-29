import { useState } from "react";
import { registerStudent } from "../Service/api";


function StudentFrom() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerStudent(form);
    alert("Student Added 🚀");
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-xl p-8 w-[400px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="w-full border p-2 mb-4 rounded"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4 rounded"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentFrom;