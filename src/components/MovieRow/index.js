import React, { useState } from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './MovieRow.css'

export default function MovieRow({ title, items }) {
    const [scrollX, setScrollX] = useState(0)

    function handleLeftArrow(){
        let sliderLeft = scrollX + Math.round(window.innerWidth / 2);

        if(sliderLeft > 0){
            sliderLeft = 0;

        }
        setScrollX(sliderLeft);
    }

    function handleRightArrow(){
        let sliderRight = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150;
        if((window.innerWidth - listWidth) > sliderRight){
            sliderRight = (window.innerWidth - listWidth) - 60
        }
        setScrollX(sliderRight)
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>

            <div className='movieLeft' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} />
            </div> 

            <div className='movieRight'  onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} />
            </div>            

            <div className='movieRowListArea'>
                <div className='movieRowList'
                    style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}
                >
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div 
                            key={key} 
                            className="movieRowItem">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}