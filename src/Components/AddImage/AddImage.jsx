import React from "react";
import {useForm} from "react-hook-form";
import style from './AddImage.module.css'
import DragAndDropZone from "./DragAndDropZone/DragAndDropZone";

const AddImage = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onSubmit"});

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit(props.onSubmit)}>
                <input defaultValue=''
                       placeholder='Введите URL картинки'
                       {...register('url', {
                           required: true,
                           pattern: /\.(png|gif|jpg|jpeg|ico|bmp|svg|webp)$/
                       })}
                />
                {errors.url && <span className={style.warning}>Неверный адрес картинки</span>}
                <input type="submit"/>
            </form>
            <DragAndDropZone onSubmit={props.onSubmit}/>
        </div>
    );
}

export default AddImage;


