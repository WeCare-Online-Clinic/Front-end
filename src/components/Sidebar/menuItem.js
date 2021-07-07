import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import BarChartIcon from '@material-ui/icons/BarChart'

export const doctorMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '',
  },
  {
    icon: <PeopleIcon style={{ color: '#fff' }} />,
    name: 'Patients',
    url: '',
    children: [
      {
        name: 'View Patients',
      },
    ],
  },
  {
    icon: <AssignmentIndIcon style={{ color: '#fff' }} />,
    name: 'Consultation',
    url: '',
  },
  {
    icon: <BarChartIcon style={{ color: '#fff' }} />,
    name: 'Statistics',
    url: '',
    children: [
      {
        name: 'Yearly',
        url: '',
      },
      {
        name: 'Monthly',
        url: '',
      },
    ],
  },
]
