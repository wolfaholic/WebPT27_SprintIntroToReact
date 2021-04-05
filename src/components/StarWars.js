import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './Character';

export default function StarWars ();
    const [people, setPeople] = ([])

    useEffect(() => {
        function getPeople() {
            axios
            .get(`https://swapi.co/api/people/`)
            .then(response => {
            console.log(response.data.results);
            setPeople(response.data.results);
            })
            .catch(error => {console.log("Error Message", error);
              });
        };
    getPeople();    
    }, []);