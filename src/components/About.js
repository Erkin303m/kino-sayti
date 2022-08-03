import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import All from '../sklet/All'

const About = () => {
    // const son = parseInt(useParams().id);
    // console.log(son);

    // const [aboutData, setAboutData] = useState([]);

    // const axios = require("axios").default;
    // const Key = "51cc7f5f459038d8f6fd27150449d6a1"

    // useEffect(() => {
    //     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`)
    //         .then((v) => {
    //             console.log(v.data.results);
    //             setAboutData(v.data.results)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);

    // console.log("about da gi data", aboutData[son]);


    return (
        <div>
            <h1>salom</h1>
            {/* <All>
                <div className="container">
                    {
                        (aboutData.length > 0) ? (
                            <div className='row'>
                                <div className="col-6">
                                    <img src={`https://image.tmdb.org/t/p/original${aboutData[son].backdrop_path}`} alt="rasm" className='img-fluid' />
                                </div>
                                <div className="col-6">
                                    <h1>{aboutData[son].title}</h1>
                                    <h3>ID: <span className='text-success'>{aboutData[son].id}</span> </h3>
                                    <p className='text-secondary fw-bold'>{aboutData[son].overview}</p>
                                    <h3>Date: <span className='text-danger'>{aboutData[son].release_date}</span> </h3>
                                    <h2>View Count: <span className='text-warning'>{aboutData[son].vote_count}</span> </h2>
                                </div>
                            </div>
                        ) : (
                            <h1>sabir qib turing</h1>

                        )
                    }
                </div>


            </All> */}
        </div>
    )
}

export default About