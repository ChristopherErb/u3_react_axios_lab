import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigation } from 'react-router-dom'
import { BASE_URL } from '../globals'


const FilmList = () => {


    const[films, setFilms] = useState([])

    useEffect(()=> {
        const getFilms = async () => {
            const response = await axios.get(`${BASE_URL}films`)
            setFilms(response.data.results)
            console.log(response.data.results)
        }

        getFilms()


    }, [])

    return (
        <div className='film'>
            <h2>List of films</h2> 
            {
                films.map((film, key) => (
                    <div key={key} className='card'>
                        <h3>{film.title}</h3>
                        </div>
                ))
            }
        </div>
    )

}

export default FilmList