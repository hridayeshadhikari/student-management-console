import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js"
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search.js";


const Student = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8000/student/students",
      {
        validateStatus: () => {
          return true;
        }
      }
    );
    if (result.status === 302) {
      setStudents(result.data);
    }
    setStudents(result.data)
  }

  const deleteStudent=async(id)=>{
    await axios.delete(`http://localhost:8000/student/delete/${id}`
    );
    loadStudent();
  }
  return (
    <section>
      <Search
				search={search}
				setSearch={setSearch}
			/>
      <table className='container table table-bordered table-hover'>
        <thead>
          <tr className='text-center'>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {students
          .filter((st) =>
							st.firstname
								.toLowerCase()
								.includes(search))
                
              .map((student, index) => (
            <tr key={Student.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
              <td>{student.firstname}</td>
              <td>{student.lastname}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td className='mx-2'>
                <Link to={`/student-view/${student.id}`} >
                  <button className='btn btn-info'><FaEye /></button>
                </Link>
              </td>
              <td className='mx-2'>
                <Link to={`/edit-student/${student.id}`} >
                  <button className='btn btn-success' ><FaEdit /></button>
                </Link>
              </td>
              <td className='mx-2'>

                <button className='btn btn-danger'
                onClick={()=>deleteStudent(student.id)}
                ><FaTrashAlt /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </section>
  )
}

export default Student
