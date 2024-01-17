import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const AddStudent = () => {
    let navigate=useNavigate();
    const [student, setStudent] = useState({
        firstname: '',
        lastname: '',
        email: '',
        department: ''
    })
    const { firstname, lastname, email, department } = student;

    const handleInputChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }

    const saveStudent =async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/student/add",student);
        navigate('/view-all-students');
    };
    return (

        <div className='col-sm-8 py-2 px-5'>
            <form onSubmit={(e)=>saveStudent(e)}>
                <div className='input-group mb-5'>
                    <label className='input-group-text'
                        htmlFor='firstname'>
                        First Name
                    </label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='firstname'
                        id='firstname'
                        required
                        value={firstname}
                        onChange={(e) => handleInputChange(e)}
                    />


                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text'
                        htmlFor='lastname'>
                        Last Name
                    </label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='lastname'
                        id='lastname'
                        required
                        value={lastname}
                        onChange={(e) => handleInputChange(e)}
                    />


                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text'
                        htmlFor='email'>
                        Email
                    </label>
                    <input className='form-control col-sm-6'
                        type='email'
                        name='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />


                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text'
                        htmlFor='department'>
                        Department
                    </label>
                    <input className='form-control col-sm-6'
                        type='text'
                        name='department'
                        id='department'
                        required
                        value={department}
                        onChange={(e) => handleInputChange(e)}
                    />


                </div>
                <div className='row mb-5'>
                    <div className='col-sm-2'>
                        <button type='submit'
                            className='btn btn-outline-success btn-lg'
                        >Save</button>
                    </div>

                    <div className='col-sm-2'>
                        <Link type='submit'
                        to={'/view-all-students'}
                            className='btn btn-outline-warning btn-lg'
                        >Cancel</Link>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddStudent
