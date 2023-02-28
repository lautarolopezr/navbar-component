import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../context/DarkModeContext';

const Template = () => {
    const {darkMode} = useDarkModeContext()
    return (
        <>
        <div className={`${darkMode ? "cardCourseDark" : "cardCourse"}`}>
            <div className='cardCourse__img'>
                <img src="../img/apple-tv.jpg" alt="" />
            </div>
            <div className='cardCourse__content'>
                <h2 className= {`${darkMode ? "cardCourse__content__titleDark" : "cardCourse__content__title" }`}> Full Stack Developer Course </h2>
                <h4 className={`${darkMode ? "cardCourse__content__technologiesDark" : "cardCourse__content__technologies" }`} >HTML/CSS/JavaScript/React/MongoDB/MySQL</h4>
                <h4 className={`${darkMode ? "cardCourse__content__teacherDark" : "cardCourse__content__teacher" }`}>Teacher :  Lautaro Lopez</h4>
                <h2 className={`${darkMode ? "cardCourse__content__descriptionDark" : "cardCourse__content__description" }`}>Looking to become a full stack developer? Our comprehensive course covers all the essential technologies and tools you need to know to build web applications from start to finish. You'll learn how to design and develop user interfaces with HTML, CSS, and JavaScript, build server-side applications with Node.js and Express, work with databases using SQL and MongoDB With hands-on projects and real-world examples, you'll gain the practical experience you need to jumpstart your career as a full stack developer.</h2>
                <Link to={"/"}><button className='btn btn-dark'>Purchase</button></Link>
            </div>
            <div className='cardCourse__extra'>
                <div className='cardCourse_extra__container'>
                    <i className="fa-solid fa-clock"></i>
                    <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>40 hours of best quality</h3>
                </div>
                <div className='cardCourse_extra__container'>
                    <i className="fa-solid fa-closed-captioning"></i>
                    <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>Subtitles enable</h3>
                </div>
                <div className='cardCourse_extra__container'>
                    <i class="fa-solid fa-shield-halved"></i>   
                    <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>Enjoy this product for life</h3>
                </div>
                <div className='cardCourse_extra__container'>
                    <i class="fa-solid fa-certificate"></i>
                    <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>Certificated by Google</h3>
                </div>
            </div>
            </div>
        </>


    );
}

export default Template;
