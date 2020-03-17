import React from 'react'

export default function CurrentSong({artistName, image, songName}) {

    return (
      
                  <div className="Player__header">
        <div className="Player__image-wrapper">
          <div
            className="Player__image-shadow"
            style={{ backgroundImage: `url("${image}")` }}
          />

          <div
            className="Player__image"
            style={{ backgroundImage: `url("${image}")` }}
          />
        </div>
        <div className="Player__info">
          <h1>{artistName}</h1>

          <h2>{songName}</h2>
        </div>
      </div>
      
    )
}
