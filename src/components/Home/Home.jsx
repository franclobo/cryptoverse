import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, fetchData } from '../../redux/Home/home';

export default function Home() {
  const dispatch = useDispatch();
  const dataList = useSelector((store) => store.home);
  console.log(dataList);
  if (dataList.length === 0) {
    dispatch(fetchData());
  }
  return (
    <>
      <header>
        <h1>Financial Metrics</h1>
        <select>
          <option value="1" onSelect={() => dispatch(getData())}>Most Active</option>
          <option value="2">Most Gainer</option>
          <option value="3">Most Loser</option>
        </select>
      </header>
      <div>
        <h2>Most Active Stock Companies</h2>
      </div>
      <footer>
        Copirigth Francisco Borja 2022
      </footer>
    </>
  );
}
