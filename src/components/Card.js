import React, {useState} from 'react';
import Rating from '@mui/material/Rating';

const Card = ({singer,ratingChange}) => {
    const [rating, setRating] = useState(singer.rating)

    return (
        <div style={{backgroundColor: "white", width: "800px", borderRight: `10px ${singer.color} solid`}}>
            <div>
                <img style={{float: "left"}} src={singer.coverUrl} alt={""} width={200} height={108}/>
                <h2 className='fontName' style={{color: `${singer.color}`, position: "relative", left: "15px",fontFamily: 'Raleway sans-serif'}}><strong>{`${singer.name}`}</strong></h2>
                <h2 style={{fontSize: "20px", position: "relative", left: "15px"}}>{singer.single}</h2>
            </div>

            <div key={singer.id}>
                <span className='mx-3'>Rate me</span>
                    <Rating
                        name="customized-10"
                        value={rating}
                        max={10}
                        sx={{
                            color: `${singer.color}`,
                            fontSize: "15px"
                        }}
                        onChange={(event,newValue) => {
                            setRating(newValue)
                            ratingChange(singer.id,newValue)
                        }}
                    />
                    {rating}
            </div>
        </div>
    );
};

export default Card;