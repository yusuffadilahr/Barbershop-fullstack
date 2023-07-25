import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/jobs'); // Pastikan URL endpoint benar
            setJobs(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Fungsi untuk mengonversi base64 menjadi URL file
    const getResumeURL = (base64Data) => {
        return `data:application/pdf;base64,${base64Data}`;
    };

    return (
        <div className='container'>
            <div className='columns mt-5'>
                <div className='column is-half'>
                    <table className='table is-striped is-fullwidth'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Posisi</th>
                                <th>Pengalaman</th>
                                <th>Resume</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job.id}>
                                    <td>{index + 1}</td>
                                    <td>{job.name}</td>
                                    <td>{job.email}</td>
                                    <td>{job.phone}</td>
                                    <td>{job.position}</td>
                                    <td>{job.experience}</td>
                                    <td>
                                        {/* Tambahkan tombol atau tautan untuk mengakses file resume */}
                                        <a href={getResumeURL(job.cv_path)} target="_blank" rel="noopener noreferrer">
                                            Lihat Resume
                                        </a>
                                    </td>
                                    <td>Actions</td> {/* Tambahkan tombol aksi sesuai kebutuhan */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;