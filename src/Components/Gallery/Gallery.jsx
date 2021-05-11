import React from "react";
import style from './Gallery.module.css'

const Gallery = (props) => {
    return (
        <div className={style.gallery}>
            {
                props.items.map((item, index) => {
                    return <div className={style.gallery__item}  key={index}>
                        <img src={item.url} alt=""/>
                        <button onClick={props.deleteImage}>Удалить</button>
                    </div>
                }).reverse()
            }
        </div>
    )
};

export default Gallery;