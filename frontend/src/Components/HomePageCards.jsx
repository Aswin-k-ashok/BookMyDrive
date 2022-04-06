import React from 'react'
import { Box, Card, Grid, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { fontSize, padding } from '@mui/system';

const useStyles = makeStyles({
    flexCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '18px',
        backgroundColor: '#e0e0e0',
        boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff', '&:hover': {
            boxShadow: '8px 8px 16px #d0d0d0, -8px -8px 16px #f0f0f0',

        },
    },
    flexPaper: {
        padding: '1em',
        fontSize: '3em',
        display: 'flex',
        flexWrap: 'wrap',
        height: '3em',
        backgroundColor: '#fff',
    },


})
function HomePageCards() {
    const classes = useStyles();

    return (
        <Grid container spacing={2} marginY={3} style={{ backgroundColor: "#F9FAF4", padding: "3em", borderRadius: "10px" }}>
            <Grid item lg={4} >
                <Card className={classes.flexCard}>

                    <iframe src="https://embed.lottiefiles.com/animation/92808" style={{ border: 'none', backgroundColor: 'white', width: '100%' }}></iframe>
                    <Paper>
                        <p className={classes.flexPaper}>U'r Car  U'r Choice</p>
                    </Paper>
                </Card>
            </Grid>

            <Grid item lg={4} >
                <Card className={classes.flexCard}>

                    <iframe src="https://embed.lottiefiles.com/animation/31815" style={{ border: 'none', backgroundColor: 'white', width: '100%' }}></iframe>
                    <Paper>
                        <p className={classes.flexPaper}>Your car at your place</p>
                    </Paper>
                </Card>
            </Grid>

            <Grid item lg={4} >
                <Card className={classes.flexCard}>

                    <iframe src="https://embed.lottiefiles.com/animation/24347" style={{ border: 'none', backgroundColor: 'white', width: '100%' }}></iframe>
                    <Paper>
                        <p className={classes.flexPaper}>Keep in touch</p>
                    </Paper>
                </Card>
            </Grid>

        </Grid>
    )
}

export default HomePageCards