import React from "react";
import {useForm} from "react-hook-form";
import DragAndDropZone from "./DragAndDropZone/DragAndDropZone";

const AddImage = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onSubmit"});


    return (
        <div>
            <form className='form' onSubmit={handleSubmit(props.onSubmit)}>
                <input value={props.text}
                       placeholder='Введите URL картинки'
                       {...register('url', {
                           required: true,
                           pattern: /\.(png|gif|jpg|jpeg|ico|bmp|svg|webp)$/
                       })}
                       onChange={(e) => {
                           props.setText(e.target.value)
                       }}
                />
                {errors.url && <span className='warning'>Неверный адрес картинки</span>}
                <input type="submit" onClick={() => {
                }}/>
            </form>
            <DragAndDropZone onSubmit={props.onSubmit}/>
        </div>
    );
}

export default AddImage;


