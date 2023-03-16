import ItemCount from '../Navbar/ItemCount/ItemCount';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    const {darkMode} = useDarkModeContext()
    const {addItem} = useCartContext() 


    const onAdd = (ammount) => {
        addItem(item,ammount)
    }

    return (
        <>
            <div className={`${darkMode ? "cardCourseDark" : "cardCourse"}`}>
                <div className='cardCourse__img'>
                    <img src={item.img} alt="" />
                </div>
                <div className='cardCourse__content'>
                    <h2 className={`${darkMode ? "cardCourse__content__titleDark" : "cardCourse__content__title"}`}> {item.name} </h2>
                    <h4 className={`${darkMode ? "cardCourse__content__technologiesDark" : "cardCourse__content__technologies"}`} >{item.technologies}</h4>
                    <h4 className={`${darkMode ? "cardCourse__content__teacherDark" : "cardCourse__content__teacher"}`}>Teacher :  {item.teacher}</h4>
                    <h2 className={`${darkMode ? "cardCourse__content__descriptionDark" : "cardCourse__content__description"}`}>{item.description}</h2>
                    <ItemCount initvalue={1} stock = {item.stock} onAdd = {onAdd}/>
                </div>
                <div className='cardCourse__extra'>
                    <div className='cardCourse_extra__container'>
                        <i className="fa-solid fa-clock"></i>
                        <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>{item.hours} hours of best quality</h3>
                    </div>
                    <div className='cardCourse_extra__container'>
                        <i className="fa-solid fa-closed-captioning"></i>
                        <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>Subtitles enable</h3>
                    </div>
                    <div className='cardCourse_extra__container'>
                        <i className ="fa-solid fa-shield-halved"></i>
                        <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>Enjoy this product for life</h3>
                    </div>
                    <div className='cardCourse_extra__container'>
                        <i className="fa-solid fa-certificate"></i>
                        <h3 className={`${darkMode ? "cardCourse_extra__container__h3Dark" : "cardCourse_extra__container__h3"}`}>Certificated by Google</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;
