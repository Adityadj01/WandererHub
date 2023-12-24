import React from 'react';
import './Book.css';
import Axios from "axios";

const Book = () => {
    let place = [
        {
            name: "Unkal",
            price: "100",
            image: "https://static.toiimg.com/photo/msid-53318797,width-96,height-65.cms",
        },

        {
            name: "Tolankeri",
            price: "200",
            image: "https://nitter.net/pic/media%2FFNkyThzagAA15J2.jpg%3Fname%3Dsmall",
        },
    ]
    // console.log(place[0].price);
    const bookunkal = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = place[0].image;
        nameTarget.innerHTML = place[0].name;
        priceTarget.innerHTML = '₹' + place[0].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            console.log (place[0].name,+ place[0].price);
            Axios.post("http://localhost:3001/insert",{pname : place[0].name,pprice:place[0].price});
        }

    }
    const booktolankeri = (event) => {
        console.log(event);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const cards = document.querySelector(".cards_box");
        const request = document.querySelector(".request");

        imageTarget.src = place[1].image;
        nameTarget.innerHTML = place[1].name;
        priceTarget.innerHTML = '₹' + place[1].price;
        cards.style.display = "none";
        request.style.display = "block";

        writeUserData();
        function writeUserData() {
            console.log ( place[1].name, + place[1].price);
            Axios.post("http://localhost:3001/insert",{pname : place[1].name,pprice:place[1].price});
        }
    }
    const request = (event) => {
        console.log(event);
        const x = Math.floor((Math.random() * 99999999) + 100);
        const imageTarget = document.querySelector("#targetImage");
        const nameTarget = document.querySelector("#targetName");
        const priceTarget = document.querySelector("#targetPrice");
        const request = document.querySelector(".request");
        const cards = document.querySelector(".cards_box");
        request.style.display = "none";
        cards.style.display = "block";
        alert("Your request has been sent");
        
        imageTarget.src = '';
        nameTarget.innerHTML = '';
        priceTarget.innerHTML = '';
        writeUserData();
        function writeUserData() {
            alert("your ticket number is"+x);
            console.log ( x);
            Axios.post("http://localhost:3001/insert",{ticno :x});
        }
    }
    return (
        <div className="box">
            <div className="content">
                <div className="text">Find best tourist places</div>
                <div className="target">
                    <div className="trgt">
                    <div className="card">
                        <img src="" id='targetImage' alt="imageselect" />
                         <div className="place_name" id='targetName'></div>
                        <div className="price" id='targetPrice'></div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="cards_box">
                        <div className="card" onClick={bookunkal}>
                            <img src={place[0].image} alt="unkal" />
                            <div className="place_name">{place[0].name}</div>
                            <div className="price">{'₹' + place[0].price}</div>
                        </div>
                        {/*  */}
                        <div className="card" onClick={booktolankeri}>
                            <img src={place[1].image} alt="tolankeri" />
                            <div className="place_name">{place[1].name}</div>
                            <div className="price">{'₹' + place[1].price}</div>
                        </div>
                    </div>
                    <div className="request">
                        <button className="btn" onClick={request}>Request</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Book;