import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useSelector} from 'react-redux';

export default function ReactLoader() {

  /// This loader status comes from LoaderReducer that will update loader status as a boolean value whenever it will change.
  const loaderCurrentStatus = useSelector((state)=> state.loaderBox.loaderStatus)

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loaderCurrentStatus}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
