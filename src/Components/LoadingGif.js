import React from 'react'
import loader from './FadingSquares.gif'
const LoadingGif = () => {
    return (
        <div class="w-100 p-2 text-center" >
        <span>
            <img src = {loader}  />
        </span>
        </div>
    )
}

export default LoadingGif
