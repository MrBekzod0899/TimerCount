import * as React from 'react';
import './modal.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';

import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  minHeight: 600,
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
  const [selectSong,setSelectSong]=React.useState('Bell')
  const [PomodoraTime,setPomodoraTime]=React.useState(25)
  const [ShortBreakTime,setShortBreakTime]=React.useState(5)
  const [LongBreakTime,setLongBreakTime]=React.useState(10)

  const [checked2, setChecked2] = React.useState(true);
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };


  const handleSelect=(e)=>{
    setSelectSong(e.target.value)
  }
  
  const handlePomodora=(e)=>{
    setPomodoraTime(e.target.value)
  }
  const handleShortTime=(e)=>{
    setShortBreakTime(e.target.value)
  }
 const handleLongTime=(e)=>{
    setLongBreakTime(e.target.value)
  }

  const ItemsChanging={
      selectSongs:selectSong,
      PomodoraCount:PomodoraTime,
      shortTimeCount:ShortBreakTime,
      longTimeCount:LongBreakTime,
  }

  
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
            <span onClick={props.handleClose} style={{ cursor: 'pointer' }}><CloseIcon /></span>
          </div>

          <div className='input-group-horizontal TimerItems'>
            <label htmlFor="">
              <span>Pomodora</span>
              <input value={PomodoraTime} onChange={handlePomodora}  type='number' className='form-control' placeholder='enter time' />
            </label>
            <label htmlFor="">
              <span>Short Break</span>
              <input value={ShortBreakTime} onChange={handleShortTime}   type='number' className='form-control' placeholder='enter time' />
            </label>
            <label htmlFor="">
              <span>Long Break</span>
              <input value={LongBreakTime} onChange={handleLongTime}  type={'number'} className='form-control' placeholder='enter time' />
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
            <input type="number" placeholder='longInter' />
          </div>

          <div className='SoundAlarm'>
            <label htmlFor="">Alarm Sound</label>
            <select className="form-select w-25" aria-label="Select song" onClick={(e)=>handleSelect(e)}>
              
              <option value="Bell" >Bell</option>
              <option value="Ring">Ring</option>
              <option value="ETimer">Electiric timer</option>
              <option value="ClockRing">Clock ring</option>
            </select>
          </div>
          <div className="progress">
            <div className="progress-bar" role="progressbar"  ></div>
          </div>
          <div className='SubmitClick' onClick={props.handleClose} >
            <button className="btn btn-success"  onClick={()=>props.handleSubmit(ItemsChanging)} obj={ItemsChanging} >OK</button>
          </div>

        </Box>
      </Modal>
    </div>
  );
}
