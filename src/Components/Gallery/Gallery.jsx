import React from "react";
import Image from "./Image/Image";

const Gallery = (props) => {
    return (
        <div className='gallery'>
            {props.items.map((item, index) => {
                return <Image item={item} index={index} deleteImage={props.deleteImage} />
            }).reverse()}
        </div>
    )
};

export default Gallery;