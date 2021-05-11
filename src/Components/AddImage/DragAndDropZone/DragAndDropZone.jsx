import React from "react";
import style from '../AddImage.module.css'

const DragAndDropZone = (props) => {

    const addLocalImageToGallery = (e) => {
        e.preventDefault();
        let files = e.dataTransfer.files;
        console.log(files)
        let reader = new FileReader()

        reader.onloadend = () => {
            let images = [];
            images.push(files[0])
            const data = images.map(() => {
                return {
                    url: reader.result
                }
            });
            console.log(data)
            props.onSubmit(data[0])
        }
        reader.readAsDataURL(files[0]);
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }
    const dragOver = (e) => {
        e.preventDefault();
    }
    const dragLeave = (e) => {
        e.preventDefault();
    }

    return (
        <div className={style.dragZone}
             onDragEnter={dragEnter}
             onDragLeave={dragLeave}
             onDragOver={dragOver}
             onDrop={addLocalImageToGallery}>Или перетащи файл сюда</div>
    )
}

export default DragAndDropZone;