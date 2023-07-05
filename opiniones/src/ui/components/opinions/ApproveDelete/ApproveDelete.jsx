import React, { useState } from 'react';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import CloseIcon from '@mui/icons-material/Close';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import useStyles from './ApproveDelete.style';

const ApproveDelete = ({ isOpen, setIsOpen }) => {
  
  const classes = useStyles();
  const [accept, setAccept] = useState(false);
  const handleCloseReset = () => {
    setIsOpen(0);
    setAccept(false);
  }
    
  const handleDeleteClick = () => {
    setAccept(true);
  };

  const modalContent = () => {
    if (isOpen === 1) {
      return (
        <>
          <div className={classes.icon}><VerifiedOutlinedIcon  sx={{ fontSize: "80px", color:"#64D148"}} /></div>
          <p className={classes.text}>Opinión Aprobada !</p>
        </>
      );
    } else if (isOpen === 2) {
      if (accept) {
        return (
          <>
            <div className={classes.icon}><DeleteSweepOutlinedIcon sx={{ fontSize: "100px", color:"#64D148"}} /></div>            
            <p className={classes.text}>Opinión eliminada</p>
          </>
        );
      } else {
        return (
          <>
            <div className={classes.icon}><AnnouncementOutlinedIcon sx={{ fontSize: "100px" }} /></div>
            <p className={classes.text}>¿Está seguro de que desea eliminar la opinión?</p>
            <div className={classes.buttons}>
              <button className={`${classes.button} ${classes.ok}`} onClick={handleDeleteClick} > OK</button>
              <button className={`${classes.button} ${classes.cancel}`} onClick={handleCloseReset}>Cancel</button>
            </div>
          </>
        );
      }
    }
  };

  return (
    isOpen ? (
      <div className={classes.wrapper}>
        <div className={classes.modal}>
          <div className={classes.close}>
            <CloseIcon sx={{ fontSize:"20px"}} onClick={handleCloseReset}/>
          </div>
          {modalContent()}
        </div>
      </div>
    ) : null
  );  
};

export default ApproveDelete;
