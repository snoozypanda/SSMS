'use client'

import AdminDashboard from '@app/components/AdminDashboard';
import AdminSideBar from '@app/components/AdminSideBar';
import React from 'react'

const CourseDashboard = () => {
  return (
    <AdminDashboard listPath="/admin/courses/all" role="Course" />
  )
}

export default CourseDashboard;