"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Foodcategory from './Foodcategory';


export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button  onClick={handleClickOpen}>
      <Foodcategory/>
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
        <div className='flex gap-10'>
          <div>
            <img className='w-[500px] h-[300px] rounded-lg' src="https://www.figma.com/file/VqYifDAzddKNk05lRmWEPe/image/669a97cef4ad7e823b2a1cb020f7b7e74bce1ed7" alt="" />
          </div>
          <div> 
            <div className='flex flex-col gap-9'>
              <div><p  className="font-semibold text-lg">Өглөөний хоол</p>
            <p className="text-green-500">14,800</p>
            </div>
            <div>
            <p className="font-semibold text-lg">Орц</p>
            <p className="w-[200px] font-normal text-base line-clamp-3 text-[#767676] rounded-lg bg-gray-200">Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  </p>
            </div> 
             <div> </div>
            </div>
          

          </div>
        </div>
        </DialogTitle>
      </Dialog>
    </React.Fragment>
  );
}
