import React, {useState} from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar} from '@mui/material';
import { EditRounded, PhotoCamera, VisibilityRounded, RefreshOutlined, SentimentDissatisfiedTwoTone, CameraEnhance} from '@mui/icons-material';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let currentTime = new Date();

//AppBar is simply a navbar.
//Grid component allows us to make responsive designs.
const App = () => {
    
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
 
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position='relative' color='info'>
                <Toolbar>
                    <PhotoCamera sx={{ marginRight: '10px' }} />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main style={{backgroundImage: 'url("https://img.freepik.com/free-photo/white-paper-texture_1194-5998.jpg?w=1060&t=st=1688743649~exp=1688744249~hmac=537930b8b82106815b69a87d30c7f80b3ea36c2e179c5a560679c043c91ffa2a")', 
                backgroundRepeat: "no-repeat", backgroundSize: "cover", overflow: "hidden", paddingTop: "12px"
            }}>
                <div>
                    <Container maxWidth="md" sx={{ padding: '8px' }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album.
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                            This is an experimental photo gallery made using materials UI. This also happens to be my first project in materials UI. It has no functionality. <SentimentDissatisfiedTwoTone style={{transform: 'translate(0, 3px)'}}/>
                        </Typography>
                        <div style={{ marginTop: '40px' }}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="info" href="#cards">
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="info" onClick={() =>{window.location.reload()}}>
                                        Refresh <RefreshOutlined fontSize="small"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div id="cards">
                <Container maxWidth="md" style={{ padding: "20px 0" }}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card style={{ height: "100%", display: "flex", flexDirection: "column"}}>
                                    <CardMedia image= {"https://loremflickr.com/320/240/beach,mountain,lake?random=" + (card.toString())} title="image" style={{ paddingTop: "56.25%" }} />
                                    <CardContent style={{ flexGrow: "1" }}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography color="textSecondary" paddingBottom={5}>
                                            This is a media card. You can add your description here.
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{paddingBottom: "10px", paddingLeft: "15px"}}>
                                        <Button variant="outlined" size="small" color="info">View <VisibilityRounded fontSize="small" /></Button>
                                        <Button variant="outlined" size="small" color="info">Edit <EditRounded fontSize="small" /></Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                </div>
            </main>
            <footer style={{backgroundColor: "#03254c", padding: "40px 0", textAlign: "center", marginTop: "10px"}}>
                <Typography variant="subtitle1" color ='antiquewhite' onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} sx={{display:"inline-block" , fontStyle: "italic", textDecoration: isHover ? "underline":"none"}}>
                    © Made by Arghya Das <CameraEnhance fontSize="small" style={{transform: 'translate(2px, 4px)'}}/>
                </Typography>
            </footer>
        </>
    )
}

export default App