import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SEARCH_DATA } from "../redux/homeReducer/reducer";
import { Link } from 'react-router-dom'
import store from "../redux/store";

const Home = () => {
    const list = useSelector((state) => state.homeReducer.list);

    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleClick = () => {
        dispatch({ type: SEARCH_DATA, list: value });
    };
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={handleClick}>添加</button>
            </div>
            <div>
                {
                    list && list.map((v, i) => {
                        return <li key={i}>{v}</li>;
                    })
                }
            </div>
            <footer style={{ display: 'flex', justifyContent: 'space-between', marginTop: '100px' }}>
                <Link to='/'>首页</Link>
                <Link to='/default'>表格</Link>
                <Link to='/smallCar'>车</Link>
                <Link to='/table'>table切换</Link>
            </footer>
        </div>
    );
};
export default Home;
