import React from "react";

const Gallery = (props) => {
    return (
        <div className='gallery'>
            {
                props.items.map((item, index) => {
                    return <div className='gallery__item'  key={index}>
                        <img src={item.url} alt=""/>
                        <button onClick={props.deleteImage}>Удалить</button>
                    </div>
                }).reverse()
            }
        </div>
    )
};

export default Gallery;