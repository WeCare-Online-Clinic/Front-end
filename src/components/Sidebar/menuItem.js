import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import AssignmentIcon from '@material-ui/icons/Assignment'
import BarChartIcon from '@material-ui/icons/BarChart'
import PersonIcon from '@material-ui/icons/Person'
import ScheduleIcon from '@material-ui/icons/Schedule'
import SendIcon from '@material-ui/icons/Send'
import HistoryIcon from '@material-ui/icons/History'
import ListAltIcon from '@material-ui/icons/ListAlt'

export const doctorMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/doctor/dashboard',
  },
  {
    icon: <PeopleIcon style={{ color: '#fff' }} />,
    name: 'Patients',
    url: '/doctor/viewpatient',
  },
  {
    icon: <AssignmentIndIcon style={{ color: '#fff' }} />,
    name: 'Consultation',
    url: '/doctor/consultation',
  },
  {
    icon: <BarChartIcon style={{ color: '#fff' }} />,
    name: 'Statistics',
    url: '/doctor/statistics',
  },
]

export const adminMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/admin/dashboard',
  },
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Manage Doctors',
    children: [
      {
        name: 'View Doctors',
        url: '/admin/viewdoctors',
      },
      {
        name: 'Register Doctors',
        url: '/admin/registerdoctors',
      },
    ],
  },
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Manage Nurses',
    url: '',
    children: [
      {
        name: 'View Nurses',
        url: '/admin/viewnurse',
      },
      {
        name: 'Register Nurse',
        url: '/admin/registernurse',
      },
    ],
  },
  {
    icon: <ScheduleIcon style={{ color: '#fff' }} />,
    name: 'Doctor Schedule',
    url: '/admin/doctorschedule',
  },
  {
    icon: <ScheduleIcon style={{ color: '#fff' }} />,
    name: 'Nurse Schedule',
    url: '/admin/doctorschedule',
  },
  {
    icon: <SendIcon style={{ color: '#fff' }} />,
    name: 'Send Notifications',
    url: '/admin/doctorschedule',
  },
]


export const headnurseMenuItems = [
  
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    children: [
      {
        name: 'Manage Queue',
        url: '/headnurse/managequeue',
      },
      {
        name: 'View Doctors',
        url: '/headnurse/viewdoctors',
      },
      {
        name: 'View Patients',
        url: '/headnurse/viewpatients',
      },
    ],
  },
  
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Profile',
    url: '/headnurse/profile',
  },
  {
    icon: <AssignmentIndIcon style={{ color: '#fff' }} />,
    name: 'Register',
    url: '/headnurse/register',
  },
  {
    icon: <SendIcon style={{ color: '#fff' }} />,
    name: 'Message',
    url: '/headnurse/message',
},
]

export const nurseMenuItems = [
  
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/nurse/dashboard',
  },

  {
    icon: <ListAltIcon style={{ color: '#fff' }} />,
    name: 'Queue',
    url: '/nurse/viewqueue',   
  },

  {
    icon: <ListAltIcon style={{ color: '#fff' }} />,
    name: 'Doctor List',
    url: '/nurse/viewdoctor',
  },

  {
    icon: <ListAltIcon style={{ color: '#fff' }} />,
    name: 'Lab Tests',
    children: [
      {
        name: 'View Patient List',
        url: '/nurse/viewpatient',
      },
      {
        name: 'Add Lab Tests',
        url: '/nurse/addlabtest',
      },
    ],
  },
  
  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Profile',
    url: '/nurse/profile',
  },
  
]

export const patientMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/patient/dashboard',
  },
  {
    icon: <AssignmentIcon style={{ color: '#fff' }} />,
    name: 'Reports',
    url: '/patient/reports',
  },
  {
    icon: <HistoryIcon style={{ color: '#fff' }} />,
    name: 'Clinic History',
    url: '/patient/history',

  },
]

export const labMenuItems = [
  {
    icon: <DashboardIcon style={{ color: '#fff' }} />,
    name: 'Dashboard',
    url: '/labtech/dashboard',
  },
  {
    icon: <ListAltIcon style={{ color: '#fff' }} />,
    name: 'Lab Tests',
    children: [
      {
        name: 'View Patient List',
        url: '/labtech/viewpatient',
      },
      {
        name: 'Add Lab Tests',
        url: '/labtech/addlabtest',
      },
    ],
  },
  {
    icon: <AssignmentIcon style={{ color: '#fff' }} />,
    name: 'Lab Reports',
    children: [
      {
        name: 'View Lab Reports',
        url: '/labtech/viewlabreport',
      },
      {
        name: 'Create Lab Reports',
        url: '/labtech/addlabreport',
      },
    ],
  },

  {
    icon: <PersonIcon style={{ color: '#fff' }} />,
    name: 'Profile',
    url: '/labtech/profile',
  },
]
