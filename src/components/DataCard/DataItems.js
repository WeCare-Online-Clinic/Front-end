import { getStorageItem, setStorageItem } from '../../utils/StorageUtils'

const user = getStorageItem('user')
console.log(user)

export const adminDataItems = [
  {
    name: 'Registered Patients',
    value: 212123,
  },
  {
    name: 'Doctors',
    value: 145,
  },
  {
    name: 'Nurses',
    value: 537,
  },
  {
    name: 'Lab Technicians',
    value: 15,
  },
]

export const doctorDataItems = [
  {
    name: 'Total Registered Patients In Clinic',
    value: 2123,
  },
  {
    name: 'Patients Registered In Last Week',
    value: 145,
  },
  {
    name: 'Next clinic Date',
    value: '2021/07/12',
  },
  {
    name: 'Patients in Next Clinic Date',
    value: 55,
  },
]

export const labtechDataItems = [
  {
    name: 'Lab Tests',
    value: 23,
  },
  {
    name: 'Lab Reports Added (Today)',
    value: 14,
  },
  {
    name: 'Lab Reports Issued (Month)',
    value: 145,
  },
  {
    name: 'Lab Reports To Be Issued',
    value: 45,
  },
]
