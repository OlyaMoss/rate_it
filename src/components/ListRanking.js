import React, {useEffect, useState} from 'react';
import Card from "./Card";
import ExtensionIcon from '@mui/icons-material/Extension';


const ListRanking = () => {
    const [singers, setSingers] = useState([]);
    const [loading, setLoading] = React.useState(true);


    useEffect(() => {
        async function fetchSingers() {
            try {
                const singers = await fetch('data.json');
                const singersJSON = await singers.json();
                if (singersJSON) {
                    setSingers(singersJSON.body);
                    setLoading(false);
                }
            } catch (e) {
                console.error(e);
            }
        }

        fetchSingers()
    }, [])


    const handleRatingChange = (id, rating) => {
        const updatedSingers = singers.map((song) =>
            song.id === id ? {...song, rating} : song
        );
        setSingers(updatedSingers);
    };
    // // Reorder the films based on their ratings
    const reorderedSingers = [...singers].sort((a, b) => b.rating - a.rating);

    if (loading) {
        return <div>Loading...</div>
    }

    // const shuffle = (array) => {
    //     array.sort(() => Math.random() - 0.5);
    //     return array;
    // }
    // const handleShuffle = () => {
    //     const changes = shuffle([...singers]);
    //     setSingers(changes);
    // }
    const randomizeList = () => {
        const randomizedRatings =
            [...singers].map((item) =>
                ({
                    ...item,
                    rating: Math.floor(Math.random() * 10) + 1
                }))
        setSingers(randomizedRatings);
        console.log(singers)

    }
    return (
        <div>
            <div className='row'>
                <div style={{backgroundColor: "#ff6e00"}}>

                    <button onClick={randomizeList} style={{
                        background: '#FF711A 0% 0% no-repeat padding-box',
                        border: '1px solid #FFFFFF',
                        left: "65%",
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        textTransform: 'capitalize',
                        opacity: '1',
                        width: '200px',
                        height: '33px'
                    }}
                            className='position-relative p-1 m-1'>
                        <ExtensionIcon fontSize='small'/>
                        Random Rating
                    </button>
                </div>
            </div>
            <div className='d-flex flex-column align-items-center'>
                {reorderedSingers.map((song) =>
                    <div key={song.id} className="p-2">
                        <Card ratingChange={handleRatingChange} singer={song}/>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ListRanking;