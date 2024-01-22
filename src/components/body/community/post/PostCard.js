import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import {Avatar, Dialog, DialogContent, DialogTitle, Grid, TextField} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import {blue, deepOrange} from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import Comment from "../detail/Comment";
import Divider from "@mui/material/Divider";
import SendIcon from '@mui/icons-material/Send';
import {useState} from "react";

export default function PostCard() {
    const text = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";
    const title = "게시물 제목";
    const name = "작성자";
    const date = "2021.09.29";
    const commentNum = 0;
    const id = 1234;
    const tags = "게시물 태그";

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [comment, setComment] = useState('');

    const handleInputChange = (event) => {
        setComment(event.target.value);
    };



    return (
    <div>
        <Card sx={{
            width: '700px',
            borderRadius: 5,
            border: 0,
            height: 110,
            boxShadow: 'none',
            '&:hover': {
                boxShadow: '0 3px 3px rgba(0,0,0,0.1)',
            },
            marginBottom:1,
        }}
              onClick={handleClickOpen}>
            <Box sx={{display: 'flex'}}>
                <CardContent sx={{textAlign: 'left', display: 'flex'}}>
                    <Box sx={{display: 'flex', flexDirection: 'column', width: '52%'}}>
                        <Typography variant="h6" sx={{fontWeight: 'bold'}}>
                            {title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '100%',
                        }}>
                            {text}
                        </Typography>
                        <Box sx={{display: 'flex'}}>
                            <Typography variant="body2" color="text.secondary" paddingRight={1}>
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paddingRight={1}>
                                {date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary"
                                        sx={{display: 'flex', alignItems: 'center'}}>
                                <MessageOutlinedIcon sx={{fontSize: 15, marginRight: 0.5}}/>
                                {commentNum}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display: 'flex'}}>
                        <IconButton aria-label="settings" sx={{margin: 2}} onClick={(event) => {
                            event.stopPropagation(); // event propagation을 막음
                        }}>
                            <MoreHorizIcon/>
                        </IconButton>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        style={{margin: 'auto', borderRadius: '15px'}}
        PaperProps={{style: {borderRadius: '15px'}}}
    >
        <DialogTitle style={{height: '25px', borderBottom: '1px solid #d9d9d9'}}>
            <IconButton style={{position: 'absolute', right: '10px', top: '10px'}} onClick={handleClose}>
                <CancelIcon/>
            </IconButton>
        </DialogTitle>
        <DialogContent style={{padding:'20px',height: '680px' }}>
            <Grid container spacing={2} style={{height: '100%'}}>
                <Grid item xs={6} style={{borderRight: '1px solid #d9d9d9'}}>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                <PersonIcon />
                            </Avatar>
                        </Grid>
                        <Grid item>
                            <Typography variant="title1" style={{fontWeight:'bold'}}>{name}</Typography>
                            <Typography variant="subtitle2" style={{color:'gray'}}>{date}</Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" style={{fontWeight:'bold'}}>{title}</Typography>
                    <Typography variant="body1">{text}</Typography>
                    <Typography variant="caption" style={{backgroundColor: '#d9d9d9',marginRight:'5px', padding: '5px', borderRadius:'10px', fontSize:'14px', fontWeight:'550'}}>No.{id}</Typography>
                    <Typography variant="overline" style={{backgroundColor: '#d9d9d9',marginRight:'5px', padding: '5px', borderRadius:'10px', fontSize:'14px',fontWeight:'550'}}>#{tags}</Typography>
                </Grid>
                <Grid item xs={6} >
                    <Grid container direction="column" >
                        <Grid item style={{backgroundColor: '#eff0f3'}}>
                            <Comment/>
                        </Grid>
                        <Divider/>
                        <Grid item style={{padding:"10px 0px"}}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item style={{paddingBottom:"10px"}}>
                                    <Avatar sx={{ bgcolor: blue[500],width: '30px', height: '30px',}}>
                                        <PersonIcon  />
                                    </Avatar>
                                </Grid>
                                <Grid item>
                                    <Typography variant="title1" style={{fontWeight:'bold'}}>{name}</Typography>
                                </Grid>
                            </Grid>
                            <TextField
                                variant="standard"
                                multiline
                                rows={1}
                                fullWidth
                                placeholder="의견을 공유해 볼까요?"
                                value={comment}
                                onChange={handleInputChange}
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                            <Divider/>
                            <Grid container justifyContent="flex-end" style={{marginTop: "10px"}}>
                                <IconButton
                                    disabled={!comment}
                                    sx={{ bgcolor: 'white' }}
                                >
                                    <SendIcon sx={{ color: 'black' }}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </DialogContent>
        </Dialog>
    </div>
);}
