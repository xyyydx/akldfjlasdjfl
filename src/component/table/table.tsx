import React from 'react'
import { imgType } from '../smallCar/smallCar'
import style from './table.module.css'
type Img = {
    item: imgType
}

const Table: React.FC<Img> = ({ item }) => {
    console.log(item)
    return (
        <div>
            <div className={style['img']}>
                {
                    item.urls.map((v, i) => {
                        return (
                            <img src={v} alt="" key={i} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Table