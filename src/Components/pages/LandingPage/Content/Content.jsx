import React from "react";
import avatar from '../../../assets/avatar.jpg'
import styles from './content.module.css'
export default function Content() {
  return (
    <div className="content container-fluid">
      <div className={`row justify-content-center ${styles.contentItems}`}>
        <div className="col-lg-6 col-md-8 col-sm-12 col-12">
          <h1 className={styles.titleContent}>An Online Pomodora Timer to boost your Productive</h1>
          <div className={styles.Pomofocus}>
            <h1 className={styles.title}>What is your Pomofocus</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              officia in earum hic ad porro ducimus quam, ullam, commodi iste
              maiores mollitia. Assumenda vel numquam eos tempore error
              architecto repudiandae eveniet consequatur natus ipsa eum aliquam
              quibusdam officiis minima quod enim necessitatibus expedita
              facilis quos pariatur aut, illum, quas voluptatibus.
            </p>
          </div>
          <div className={styles.Techniques}>
            <h1 className={styles.title}>what is Pomofocus technique</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              officia in earum hic ad porro ducimus quam, ullam, commodi iste
              maiores mollitia. Assumenda vel numquam eos tempore error
              architecto repudiandae eveniet consequatur natus ipsa eum aliquam
              quibusdam officiis minima quod enim necessitatibus expedita
              facilis quos pariatur aut, illum, quas voluptatibus.
            </p>
          </div>
          <div className={styles.UsingTimer}>
            <h1 className={styles.title}>How to use Pomodoro timer</h1>
              <ul>
                <li><b>Add Task</b><span>Features Lorem ipsum dolor sit.</span></li>
                <li><b>Set time</b><span>Hi How are you !! Lorem ipsum dolor sit amet.</span></li>
                <li><b>Start Task</b><span>Good morning ! Lorem ipsum dolor sit.</span></li>
                <li><b>Add Task</b><span>Thank you Fine !Lorem, ipsum dolor.</span></li>
                <li><b>Take Break</b><span>Always Good adipisicing elit. Placeat, officia.</span></li>
                <li><b>Long Break</b><span>consectetur adipisicing elit.</span></li>
              </ul>
          </div>
          <div className={styles.Features}>
            <h1 className={styles.title}>How to use Pomodoro timer</h1>
              <ul>
                <li><b>Add Task</b><span>Lorem ipsum dolor sit.</span></li>
                <li><b>Add Task</b><span>Lorem ipsum dolor sit amet.</span></li>
                
              </ul>
          </div>
          <div className={styles.DownloadApp}>
            <h1 className={styles.title}>Download App</h1>
              <ul>
                <li><a href={avatar} download='avatar' className="text-danger">For Macos</a><span>(zip file)</span></li>
                <li><a href={avatar} download='avatar' className="text-danger">For Windows</a><span>(zip file)</span></li>
                <li><a href={avatar} download='avatar' className="text-danger">For Linux</a><span>(zip file)</span></li> 
              </ul>
          </div>
             
        </div>
      </div>
    </div>
  );
}
