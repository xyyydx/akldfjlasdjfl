import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '../table/table'
export interface imgType {
    map: any
    title: string,
    urls: string[]
}
const SmallCar: React.FC = () => {
    const [image1, setImage1] = useState<imgType>()
    const [image2, setImage2] = useState<imgType>()
    const [image3, setImage3] = useState<imgType>()
    async function fetch() {
        const res = await axios.post('/api/car')
        setImage1(res.data.data.image1)
        setImage2(res.data.data.image2)
        setImage3(res.data.data.image3)
    }
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>111111111111111
            {
                image1 && <Table item={image1} />
            }
        </div>
    )
}

export default SmallCar