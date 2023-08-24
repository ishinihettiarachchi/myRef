import {React } from 'react'
import Header from '../components/Header'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import '../styles/all.css'
import { db } from '../firebase-config';
import { collection,getDocs } from 'firebase/firestore';
import {useState,useEffect} from 'react'
import {Breadcrumbs, Typography} from '@mui/material'
import {Link} from 'react-router-dom';


function All() {

    const [references, setReferences] = useState([]);

    useEffect(()=>{
        getRef();
    },[]);

  const getRef = async()=>{
    const querySnapshot = await getDocs(collection(db, "references"));
    setReferences(querySnapshot.docs.map((doc)=>({
        ...doc.data()
    })))
  }

  return (
    <div>
        <Header/>
        <Breadcrumbs aria-label="breadcrumb" className='prev'>
          <Link 
            to= '/'
            className='link'
          >
            Home
          </Link>
          <Typography >View All</Typography>
        </Breadcrumbs>
        <div className="container all-conatainer">
        <div className="row headings">
                <div className="col-5 name">
                    <h4>Reference Name</h4>
                </div>
                <div className="col-5 book-category">
                    <h4>Category</h4>
                </div>
        </div>
        {references.map(reference =>{
                    return(
            <div className="row ref-list">
                    <div className="col-5 name">
                       {reference.Name}
                    </div>
                    <div className="col-5 book-category">
                        {reference.Category}
                    </div>
                <div className="col-1 read">
                    <AutoStoriesIcon className='read-icon'/>
                </div>
                <div className="col-1 remove ">
                    <DeleteOutlineIcon className='remove-icon'/>
                </div>
            </div>
             )
            })
        }
        </div>
    </div>
  )
}

export default All