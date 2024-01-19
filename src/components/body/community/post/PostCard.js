import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Box from '@mui/material/Box';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

export default function PostCard() {
    const text = "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.";
    const trimmedText = text.length > 95 ? text.substring(0, 95) + "..." : text;
    const title = "게시물 제목";
    const name = "작성자";
    const date = "2021.09.29";
    const commentNum = 0;


    return (
        <Card sx={{ maxWidth: 800, borderRadius: 5, border:0, maxHeight:120, boxShadow: 'none'}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
                        {title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {trimmedText}
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
                </CardContent>
                <IconButton aria-label="settings" sx={{ margin: 2 }} >
                    <MoreHorizIcon />
                </IconButton>
            </Box>
        </Card>
    );
}
