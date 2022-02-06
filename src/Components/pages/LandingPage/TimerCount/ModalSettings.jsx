import * as React from 'react';
import './modal.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '45%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    minHeight:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
    
  export default function ModalSettings(props) {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [checked2, setChecked2] = React.useState(true);
    const handleChange2 = (event) => {
      setChecked2(event.target.checked);
    };
      return (
      <div>
        <Modal
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, minWidth: 500 }} className="boxModal">
            <div className='closeModal justify-content-between d-flex border-bottom p-0 mb-3'>
                <span aria-disabled="true"> Time Settings</span>
                <span onClick={props.handleClose} style={{cursor:'pointer'}}><CloseIcon/></span>
            </div>
        
              <div className='input-group-horizontal TimerItems'>
                    <label htmlFor="">
                        <span>Pomodora</span>
                        <input type='number' className='form-control' placeholder='enter time'/>
                    </label>
                    <label htmlFor="">
                        <span>Short Break</span>
                        <input type='number' className='form-control' placeholder='enter time'/>
                    </label>
                    <label htmlFor="">
                        <span>Long Break</span>
                        <input type={'number'} className='form-control' placeholder='enter time'/>
                    </label>
              </div>
                <div className='SwitchItems'>
                    <label htmlFor="">Auto Start Breaks ?</label>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>
                <div className='SwitchItems'>
                    <label htmlFor="">Auto Start Breaks ?</label>
                    <Switch
                        checked={checked2}
                        onChange={handleChange2}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </div>   
                <div className='LongInterval'>
                    <label htmlFor="">Long Break interval</label>
                    <input type="number" placeholder='longInter'/>
                </div>
                 
                <div className='SoundAlarm'>
                    <label htmlFor="">Alarm Sound</label>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        onChange={handleChange}
                        
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Bell</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                 <div className="progress">
                        <div className="progress-bar" role="progressbar"  ></div>
                 </div>
                <div className='SubmitClick'>
                <button className="btn btn-success">Ok</button>
                </div>
               
          </Box>
        </Modal>
      </div>
    );
  }
  