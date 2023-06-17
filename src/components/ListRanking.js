import React, {useEffect, useState} from 'react';
import Card from "./Card";
import ExtensionIcon from '@mui/icons-material/Extension';


const ListRanking = () => {
    const [singers, setSingers] = useState([]);
    const [loading, setLoading] = React.useState(true);

    const handleRatingChange = (id, rating) => {
        const updatedSingers = singers.map((song) =>
            song.id === id ? {...song, rating} : song
        );
        setSingers(updatedSingers);
    };
    useEffect(() => {
        async function fetchSingers() {
            try {
                const singers = await fetch('data.json');
                const singersJSON = await singers.json();
                if (singersJSON) {
                    setSingers(singersJSON.body);
                    setLoading(false);
                    console.log(singersJSON.body)
                }
            } catch (e) {
                console.error(e);
            }
        }
        fetchSingers()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    // Reorder the films based on their ratings
    const reorderedSingers = [...singers].sort((a, b) => b.rating - a.rating);

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
        return array;
    }
    const handleShuffle = () => {
     const changes = shuffle([...singers]);
     setSingers(changes);
    }

    return (
        <div>
            <div className='row'>
                <div style={{backgroundColor: "#ff6e00" }}>
                    <button onClick={handleShuffle} style={{
                        backgroundColor: "#ff6e00",
                        borderColor: "white",
                        color: "white",
                        left: "65%",
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