'use client'

import AdminDashboard from '@app/components/AdminDashboard';
import AdminSideBar from '@app/components/AdminSideBar';
import React from 'react'

const StudentDashboard = () => {
  return (
    <AdminDashboard listPath="/admin/teachers/all" role="Teacher" />
  )
}

export default StudentDashboard;