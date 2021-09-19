import React from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import { headnurseMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { getStorageItem } from '../../../../utils/StorageUtils'
import Register from '../../../Register'
import AddPatient from '../../../Forms/AddPatient'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})

function RegisterPatient() {
  return (
    <Layout
      header={<Header user={getStorageItem('nurseInfo', true).name} />}
      sidebar={<Sidebar menuItems={headnurseMenuItems} />}
      footer={<Footer />}
      content={
        <div
          style={{
            padding: '20px',
            minHeight: '880px',
            backgroundColor: '#ebf5f7',
          }}
        >
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  return <AddPatient />
}

export default RegisterPatient
