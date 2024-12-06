import React, {useState} from 'react';
import '../styles/CPalette.css'

function CPalette(){

    //length of array(no. of boxes) for main grid
    const l= 25

    //define state for colors on main grid
    //initialize array of 24 white boxes
    const [gridColor, setGridColor]= useState(Array(l).fill('white'));

    //State to track indices of colored boxes
    const [coloredInd, setColoredInd]= useState([])

    //Array of colors for palette grid
    const paletteColor= ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']

    //function to apply chosen color to 5 random boxes in main grid
    const applyCol= (color)=> {
        
        //arr for main grid
        //copy state of gridColor to modify it
        //spread op since gridColor is array
        const mainGridCol= [...gridColor]

        coloredInd.map(index=> {return mainGridCol[index]= 'white';})

        //arr of available indices for main grid
        //keys() to fet exact no. of elem (key from key-value)
        const avlbInd= [...Array(l).keys()];

        //arr to track newly colored indices
        const newColInd= [];

        //loop to apply color to 5 random boxes
        for(let i=0; i<5; i++){
            
          //get random index from avlbl indices arr
          const rdmIndex= Math.floor(Math.random()*avlbInd.length);

          //use chosen random index to get a grid box index and remove it from avlblIndices
          //remove so the number doesn't re-occur(repeat)
          const gridIndex= avlbInd.splice(rdmIndex, 1)[0]

          //update color of chosen grid in box of main grid
          mainGridCol[gridIndex]= color

          //store index of colored box
          newColInd.push(gridIndex)
        }

        //update state with new grid colors
        setGridColor(mainGridCol);

        //update newly colored box indices in state arr
        setColoredInd(newColInd);
    }

    return(
        <div className='color-plt'>
            {/* Main grid displaying 25 boxes */}
      <div className="main-grid">
        {gridColor.map((color, index) => (
          <div
            key={index} // Unique key for each box
            className="grid-box" // CSS class for styling
            style={{ backgroundColor: color }} // Inline style to set the background color
          ></div>
        ))}
      </div>
      {/* Palette grid displaying color options */}
      <div className="palette">
        {paletteColor.map((color, index) => (
          <div
            key={index} // Unique key for each color box
            className="palette-box" // CSS class for styling
            style={{ backgroundColor: color }} // Inline style to set the background color
            onClick={() => applyCol(color)} // Event handler to apply color when clicked
          ></div>
        ))}
        </div>
        </div>
    )
}

export default CPalette