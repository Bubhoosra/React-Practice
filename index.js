import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Cpp( props){
    return(
        
        <div>
        <div className="block">
         <img src={props.img1} alt="pic" ></img>
         

        </div>
        <a href={props.lk} target="_blank">
        <button>Click me</button>
            
         </a>
         </div>
        
        
         

    )

};

ReactDOM.render(
    <>
    <div className="heading">
      <h1>Coding Platform</h1>

    </div>
    <div className="big-block">
    <Cpp img1="https://assets.leetcode.com/contest/weekly-contest-290/card_img_1654267980.png" lk="https://leetcode.com/"/>
    <Cpp img1="https://repository-images.githubusercontent.com/389729275/371ba38b-8a03-4bff-916c-c3fa5396ceda" lk="https://www.geeksforgeeks.org/"/>
    <Cpp img1="https://thesourcecode.academy/wp-content/uploads/2022/08/HackerRank2.png" lk="https://www.hackerrank.com/"/>
    
    </div>
    {/* <div className="heading">
      <h1>Gate Platform</h1>

    </div>
     <div className="big-block">
    <Cpp  />
    <Cpp/>
    <Cpp/>
    
    </div>   */}
    
        
    </>,document.getElementById('root')
);