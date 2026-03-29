import React, { useEffect, useState } from 'react';
import { deleteStudent, getStudents } from '../Service/api';

function StudentList  () {
    const [studnts,setStudents] = useState([]);

    const loadStudent = async()=>{
        const res = await getStudents();
        setStudents(res.data);
    };
    const handleDelete=async(id)=>{
        await deleteStudent(id);
        loadStudent();
    }

    useEffect(()=> {
        loadStudent();
    },[]);


  return (
    <div>
        
        <h2>StudentList</h2>
        {studnts.map((s)=>(
            <div key={s.id}>
                <p>{s.name}-{s.email}</p>
                <button onClick={()=> handleDelete(s.id)}>Delete</button>

            </div>
        ))}
        
        </div>
  );
}

export default StudentList;