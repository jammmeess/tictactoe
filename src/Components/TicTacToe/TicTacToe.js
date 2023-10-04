// Read Me:
// This Project is to make a tictactoe game where two players take turns putting their marks in empty squares. 
//The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. 

//To do this activity fast, I made this code via VScode and I would just paste it in codepen once done.



import React, { useState, useRef } from 'react' //Here we import the react app so we can access it in app.js
import './TicTacToe.css' //Here we import our css file to implement the design, but since we are coding in code pen this won't 
                                    //be necessary because this project is supposed to be coded in codepen. 
                                    //but I coded this in Vscode because it is much easier to start there then paste it in codepen. 
                                    //I understand that it's better to code in codepen rather than post it in a repository because it is much easier 
                                    //for the instructor to check the exam there rather than cloning from the repository specially if you have a lot of students.

let data = ["", "", "", "", "", "", "", "", ""]; //This is where we declare the date or x's and o's in an empty array. Later once the program 
                                                            // has started, the empty arrays would be filled with x's and o's

const TicTacToe = () => {

    let [count,setCount]= useState(0); 
    let [lock,setLock]= useState(false);
    let titleRef = useRef(null); //An empty Variable that we would use to change the title with the result of the match
    let box1 = useRef(null); 
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);   // Empty Variables (box1-5) that we would use to reset the board
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9]; //An Array of boxes that have empty variables for resetting the board once the match is finished


    //Function that would add the x's and o's to the board
    const toggle = (e,num)=>{
        if (lock){   //This code would check if the game is locked like when there is already a winner
            return 0;   //and if the statement above is true then this would exit the game
        }
        if (count%2===0) //This would check the current players turn if it is even which is player X and player O as Odd
    {
        e.target.innerHTML = '<img src ="https://cdn-icons-png.flaticon.com/512/7211/7211137.png">'; //changes the content of the clicked cell. Since it would be in codepen, I am not sure if there is a way to store images there so I just used a link instead
        data[num]="x"; //Would update the game data array that we declared earlier
        setCount(++count); //This would increase the amout of total moves.
    }
    else {
        e.target.innerHTML = '<img src ="https://cdn-icons-png.flaticon.com/512/3522/3522558.png">';
        data[num]="o";                                                                                      //Same as above but for the player O
        setCount(++count);
    }
    checkWin(); //Every after a move, the function would check if there is a winner.
    }


    //This function would check every possible winning scenario
    const checkWin =() => {
        if(data[0]=== data[1] && data[1]===data[2]  && data[2]!=="")
        {
            won(data [2]);
        }
        else if(data[3]=== data[4] && data[4]===data[5]  && data[5]!=="")
        {
            won(data [5]);
        }  
        else if(data[6]=== data[7] && data[7]===data[8]  && data[8]!=="")
        {
            won(data [8]);
        }
         else if(data[0]=== data[3] && data[3]===data[6]  && data[6]!=="")
        {
            won(data[6]);
        }
         else if(data[1]=== data[4] && data[4]===data[7]  && data[7]!=="")
        {
            won(data[7]);
        }
         else if(data[2]=== data[5] && data[5]===data[8]  && data[8]!=="")
        {
            won(data[8]);
        }
         else if(data[0]=== data[4] && data[4]===data[8]  && data[8]!=="")
        {
            won(data[8]);
        }
         else if(data[0]=== data[1] && data[1]===data[2]  && data[2]!=="")
        {
            won(data[2]);
        }
         else if(data[2]=== data[4] && data[4]===data[6]  && data[6]!=="")
        {
            won(data[6]);
        }
    }

    //This Function would determine who would be the winner.
    const won =(winner)=>{
        setLock(true);
        if (winner==="x"){
            titleRef.current.innerHTML = 'Congratulations: <img src ="https://cdn-icons-png.flaticon.com/512/7211/7211137.png"> Wins!'
        }
        else  //Would replace and reveal in the title above who is the winner of the game.
        {
            titleRef.current.innerHTML = 'Congratulations: <img src ="https://cdn-icons-png.flaticon.com/512/3522/3522558.png"> Wins!'
        }
    }
    // This function would reset all to the boxes to empty boxes and would also reset the title back to it's original title
    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = 'TicTacToe <span>KodeGo</span>';
        box_array.map((e)=>{
            e.current.innerHTML ="";
        })
    }

    return (

        // The HTML code of the title, board, and reset button.
        <div className="container">
            <h1 className="title" ref={titleRef}>TicTacToe <span>KodeGo</span></h1>
            <div className="board">
                <div className='row1'>
                    <div className='boxes' ref ={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className='boxes' ref ={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className='boxes' ref ={box3} onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                 <div className='row2'>
                    <div className='boxes' ref ={box4} onClick={(e)=>{toggle(e,3)}}></div>  
                    <div className='boxes' ref ={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className='boxes' ref ={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                 <div className='row3'>
                    <div className='boxes' ref ={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className='boxes' ref ={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className='boxes' ref ={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <button className="reset" onClick={()=>{reset()}}>Reset</button>
        </div>
    )
}

export default TicTacToe //Export function to make it appear in App.js