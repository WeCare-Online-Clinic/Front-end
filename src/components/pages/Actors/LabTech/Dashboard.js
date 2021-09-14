import React ,{useEffect} from 'react'
import Layout from '../../../Layout'
import Header from '../../../Header'
import Footer from '../../../Footer'
import Sidebar from '../../../Sidebar/Sidebar'
import DataCard from '../../../DataCard/DataCard'
import { labtechMenuItems } from '../../../Sidebar/menuItem'
import { Grid, makeStyles } from '@material-ui/core'
import { labtechDataItems } from '../../../DataCard/DataItems'
import LineStatCard from '../../../StatCard/LineStatCard'
import BarStatCard from '../../../StatCard/BarStatCard'
import { getStorageItem ,setStorageItem} from '../../../../utils/StorageUtils'
import axios from 'axios'
import Constants from '../../../../utils/Constants'
import { useHistory } from 'react-router'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    margin: '20px',
    marginBottom: '0px',
  },
})


async function get_labTech_info() {  
  const getUserInfo = await axios
    .get(
      Constants.API_BASE_URL +'/labTech/info/' + getStorageItem('user', true).id )
    .then((res) => {
      if (res.status === 200) {
        setStorageItem('labTechInfo', res.data);
        console.log("LabTech Details..............:",res.data)
      }
      else{
        console.log("djfdfjdgfhg")
      }
    })
    .catch((e) => {
      console.log("error in labtech login")
      console.log(e)
    })
}
const labTechDetails= getStorageItem('labTechInfo', true);
console.log("labTechDetails",labTechDetails)
const Dashboard=()=> {

  useEffect(() => {  
    get_labTech_info();      
     
  }, []) 

  return (
    <Layout
      header={<Header user={labTechDetails.name} />}
      sidebar={<Sidebar menuItems={labtechMenuItems} />}
      footer={<Footer />}
      content={
        <div style={{ padding: '20px', backgroundColor: '#ebf5f7' }}>
          <Content />
        </div>
      }
    ></Layout>
  )
}

function Content() {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Grid container style={{ padding: '20px' }} spacing={5}>

      <Grid className={classes.dataCard} item sm={12}>
        <DataCard cardItems={labtechDataItems} />
      </Grid>
      <Grid item sm={12}>
        <Grid container style={{ marginBottom: '10px' }} spacing={5}>
          <Grid className={classes.dataCard} item sm={6}>
            <LineStatCard title='Lab Reports Issued' />
          </Grid>
          <Grid className={classes.dataCard} item sm={5}>
            <BarStatCard title='Lab Tests - No.of Reports' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm style={{ flexGrow: 1 }}></Grid>
    </Grid>
  )
}

export default Dashboard
