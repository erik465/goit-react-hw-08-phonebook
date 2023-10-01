import React from 'react'
import AppBar from 'components/AppBar/AppBar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

const HomePage = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default HomePage
