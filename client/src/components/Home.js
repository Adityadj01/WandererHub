import React from 'react';
import  './Home.css';
import BookPage from './Book';
import { useState } from 'react';
import Axios from "axios";

const Home = () => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');

        if(!book_date.value || !book_time.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
        function writeUserData() {
          console.log( book_date.value);
          Axios.post("http://localhost:3001/insert",{pdate : book_date.value});
          console.log(book_time.value);
          Axios.post("http://localhost:3001/insert",{ptime:book_time.value});
        }
            alert('Your booking has been made');
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }
  return (
      <>
        <BookPage />
        <div className="container">
      <div className="content">
        <div className="text">Book Now</div>
        <div className="form2">
          <div className="txt">Date & Time you would like to Stay</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="book">
                <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
      </>
  );
};
export default Home;