import React, {useEffect, useState} from 'react';
import RandomButton from "./RandomButton";
import Card from "./Card";


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
    return (
        <div>
            <div>
                <RandomButton/>
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