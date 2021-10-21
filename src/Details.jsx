import React,{useRef, useState} from 'react'
import {Link} from 'react-router-dom';
import {Modal} from 'reactstrap';
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
            {/* <img style={{width: '100px', height: '100px'}} src="../images/maymun.png" alt="" /> */}
            <div className="details_card">
                <img src="../../images/home_wood2-removebg-preview.png" alt="" />
                <Link to="/game" style={{textUnderline: 'none'}}>
                    <div className="details_box details_box_1">
                        {/* <img src="../images/wood-ramka8.jpg" alt="" /> */}
                        <h1>PLAY</h1>
                        
                    </div>
                </Link>
                <Link to='/liders'>
                    <div className="details_box details_box_2">
                        {/* <img src="../images/wood-ramka8.jpg" alt="" /> */}
                        <h1>LIDERS</h1>
                    </div>
                </Link>
                <Link to="/about">
                    <div onClick={()=>setIsOpen(true)} className="details_box details_box_3">
                        {/* <img src="../images/wood-ramka8.jpg" alt="" /> */}
                        <h1>ABOUT</h1>
                    </div>
                </Link>
                
                    <div onClick={()=>setIsOpen(true)} className="details_box details_box_4">
                        {/* <img src="../images/wood-ramka8.jpg" alt="" /> */}
                        <h1>EXIT</h1>
                    </div>
                
                
            </div>
        </div>
    )
}

export default Details
