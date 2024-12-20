'use client'

import AdminDashboard from '@app/components/AdminDashboard';
import AdminSideBar from '@app/components/AdminSideBar';
import React from 'react'

const StudentDashboard = () => {
  return (
    <AdminDashboard listPath="/admin/students/all" role="Student" />
  )
}

export default StudentDashboard;