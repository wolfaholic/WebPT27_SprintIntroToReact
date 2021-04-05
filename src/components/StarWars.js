import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './Character';

export default function StarWars () {
    const [people, setPeople] = useState ([])

    useEffect(() => {
        function getPeople() {
            axios
            .get(`http://swapi.dev/api/people/`)
            .then(response => {
            console.log(response.data.results);
            setPeople(response.data.results);
            })
            .catch(error => {console.log("Error Message", error);
              });
        };
    getPeople();    
    }, []);

    return (
        <div className="character">
            {people.map(star => {
                return (
                    <CharacterCard  key={star.name}  name={star.name} height={star.height} mass={star.mass} eye_color={star.eye_color} homeworld={star.homeworld} />
                );    
            })}
        </div>
    );
}