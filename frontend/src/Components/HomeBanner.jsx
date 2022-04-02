import React from 'react'
import banner from '../banner.jpg'
import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'
import { Button, Grid } from '@mui/material'

const useStyles = makeStyles({
    bannerImage: {
        width: '100%',
        height: '500px',
        objectFit: 'cover',
    },
    bannerText: {
        marginTop: '50%',
        padding: '1em',
        fontSize: '2em',
        color: 'rgba(76, 175, 80, 0.3)',

    },
    bannerButton: {
        paddingTop: '.5em',
        paddingBottom: '.5em',
        paddingLeft: '1em',
        paddingRight: '1em',
        color: 'white',
        backgroundColor: 'blue',
        border: 'none',
        fontWeight: '800',
        marginLeft: '3em',
        borderRadius: '5px'

    }

})

function HomeBanner() {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid item md={4}>

                <div>

                    <h2 className={classes.bannerText}>Need A Drive, We got U</h2>
                    <button className={classes.bannerButton}>Rent a Car</button>
                </div>
            </Grid>

            <Grid item md={8}>

                <img src={banner} alt='banner' className={classes.bannerImage}>

                </img>

            </Grid>
        </Grid>
    )
}

export default HomeBanner