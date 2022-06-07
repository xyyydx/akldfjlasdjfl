import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchData } from '../redux/defaultReducer/reducer'

const Default = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const loading = useSelector(state => state.defaultReducer.loading)
    const error = useSelector(state => state.defaultReducer.error)
    const data = useSelector(state => state.defaultReducer.data)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    console.log(loading)
    // 求和
    if (loading) {
        console.log(loading)
        return <div>loading</div>
    }
    if (error) {
        return <div>获取失败</div>
    }
    return (
        <div>
            <button onClick={() => navigate(-1)}>退!退!退!</button>
            <div>
                {

                }
            </div>
        </div>
    )
}

export default Default