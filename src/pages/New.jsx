import {React,useState} from 'react'
import '../styles/new.css'
import Header from '../components/Header'
import {Breadcrumbs, Typography} from '@mui/material'
import {Link} from 'react-router-dom';
import { db } from '../firebase-config';
import { collection, addDoc } from "firebase/firestore";


function New() {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');
  
  const addNew=async()=>{
    const docRef = await addDoc(collection(db, "references"), {
        Name: name,
        Author: author,
        Category: category,
        Year: year,
        
      }).then(()=>{
        console.log("data added!")  
      }).catch(()=>{
        console.log("error!")  
      });
   
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
          <Typography >Add New</Typography>
        </Breadcrumbs>
        <div className="new-container">
        <div className="title">
          <h2>Add New Reference</h2>
        </div>
        <div className="container form-container">
            <div className="row ">         
                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form8Example1" class="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <label className="form-label new" for="form8Example1">Reference Name</label>
                  </div>
                </div>
                <div class="col">
                
                  <div class="form-outline">
                    <input type="text" id="form8Example2" class="form-control" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
                    <label className="form-label new" for="form8Example2">Author</label>
                  </div>
                </div>
            </div>

              <hr />

            <div class="row">
                <div class="col">
                  <div class="form-outline">
                    <input type="text" id="form8Example3" class="form-control" value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
                    <label className="form-label new" for="form8Example3">category</label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="form-outline">
                    <input type="text" id="form8Example4" class="form-control" value={year} onChange={(e)=>{setYear(e.target.value)}}/>
                    <label className="form-label new" for="form8Example4">Published Year</label>
                  </div>
                </div>
                <div class="col">
                  
                  <div class="form-outline">
                    <input type="email" id="form8Example5" class="form-control" />
                    <label className="form-label new" for="form8Example5">Email address</label>
                  </div>
                </div>

            </div>
            
        </div>
        <div className="newButton">
          <button className='addButton' onClick={addNew}>Add To Store</button>
        </div>
        </div>
    </div>
  )
}

export default New