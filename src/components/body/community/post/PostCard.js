import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

export default function PostCard({ isResizing }) {
    const text = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";
    const title = "게시물 제목";
    const name = "작성자";
    const date = "2021.09.29";
    const commentNum = 0;

    return (
        <Card sx={{
            maxWidth:'700px',
            borderRadius: 5,
            border:0,
            height:110,
            boxShadow: 'none',
            '&:hover': {
                boxShadow: isResizing ? 'none' : '0 3px 3px rgba(0,0,0,0.1)',
            },
        }}>
            <Box sx={{ display: 'flex'}}>
                <CardContent sx={{ textAlign: 'left',display: 'flex'  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column',width:'52%'}}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
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
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant="body2" color="text.secondary" paddingRight={1}>
                                {name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paddingRight={1}>
                                {date}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{display:'flex',alignItems: 'center' }}>
                                <MessageOutlinedIcon sx={{fontSize: 15, marginRight:0.5 }}/>
                                {commentNum}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex'}}>
                        <IconButton aria-label="settings" sx={{ margin: 2 }} >
                            <MoreHorizIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
}
