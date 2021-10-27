import React,{useRef, useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Modal} from 'reactstrap';
// import db from './Firebase/config'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
function Details() {
    const [isOpen, setIsOpen] = useState(false)
    const classes = useStyles();
    const [port, setPort] = useState([])
    // useEffect(()=>{
    //   db.collection('wood').onSnapshot((snapshot) => 
    //   setPort(snapshot.docs.map((doc) => doc.data()))
    //   )
    // },[])
    console.log( port[0]);
    return (
        <div className='details'>
            <Modal isOpen={isOpen} >
                <div style={{padding: '10px'}}>
                    <h3>Serious?</h3>
                    <p>Are you really want to exit...</p>
                    <div className="d-flex f-right">
                        <Button onClick={()=>setIsOpen(false)}>ОТМЕНА</Button>
                        <Button>OK</Button>

                    </div>

                </div>
            </Modal>
            <div className="details_card">
                <img src="../../images/home_wood2-removebg-preview.png" alt="" />
                <Link to="/game" style={{textUnderline: 'none'}}>
                    <div className="details_box details_box_1">
                        <h1>PLAY</h1>
                    </div>
                </Link>
                <Link to='/liders'>
                    <div className="details_box details_box_2">
                        <h1>LIDERS</h1>
                    </div>
                </Link>
                <Link to="/about">
                    <div onClick={()=>setIsOpen(true)} className="details_box details_box_3">
                        <h1>ABOUT</h1>
                    </div>
                </Link>
                
                    <div onClick={()=>setIsOpen(true)} className="details_box details_box_4">
                        <h1>EXIT</h1>
                    </div>
                
                
            </div>
        </div>
    )
}

export default Details
