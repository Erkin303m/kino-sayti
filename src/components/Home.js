import React, { useEffect, useState } from 'react'
import All from '../sklet/All'
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart, AiOutlineInfoCircle, AiOutlineLike } from "react-icons/ai";
//mui
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Home = () => {
    const [data, setData] = useState([]);
    const [korzina, setKorzina] = useState([]);
    const [open, setOpen] = React.useState(false);

    //**/**** */ */
    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    //********** */



    const axios = require("axios").default;
    const Key = "51cc7f5f459038d8f6fd27150449d6a1"

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Key}&language=en-US&page=1`)
            .then((v) => {
                console.log(v.data.results);
                setData(v.data.results)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const Korzina = (id, index) => {
        let son = 0;
        for (let i = 0; i < korzina.length; i++) {
            if (korzina[i].id == id) {
                son++
            }
        }

        if (son > 0) {
            return alert("Siz bu Kinoni qaytadan tanlamoqchi bolyapsiz !!!");
        } else {
            let a = [...korzina];
            a.push(data[index]);
            setKorzina(a);
            console.log(korzina, "qoshilganda");
            handleClick()

        }

    }
    return (
        <div>
            <All>
                <div className="d-flex justify-content-end">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={korzina.length} color="secondary">
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                    
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <div className='bg-success' onClose={handleClose} severity="success" aria-label="close" sx={{ width: '100%' }}>
                            This is a success message!
                        </div>
                    </Snackbar>

                </div>

                <div className="container">
                    <div className="row">
                        {
                            (data.length > 0) ? (

                                data.map((v, i) => {
                                    return <div className='col-4' key={v.id}>
                                        <div className="card p-2">
                                            <img src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`} alt="" />
                                            <h1>{v.title}</h1>
                                            <div className="d-flex justify-content-between">
                                                <button className='btn btn-danger'><AiOutlineLike /></button>
                                                <button className='btn btn-warning' onClick={() => Korzina(v.id, i)} variant="outlined"><AiOutlineShoppingCart /></button>
                                                <Link to={`/about/${i}`} className='btn btn-info'><AiOutlineInfoCircle /></Link>
                                            </div>
                                        </div>
                                    </div>
                                })

                            ) : (
                                <h1>data yoq</h1>
                            )
                        }
                    </div>
                </div>
            </All>
        </div>
    )
}

export default Home