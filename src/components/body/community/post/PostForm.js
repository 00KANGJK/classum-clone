import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Slide from '@mui/material/Slide';
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import {DialogActions, MenuItem, OutlinedInput, Select, TextField} from "@mui/material";
import {blue} from "@mui/material/colors";
import Box from "@mui/material/Box";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function PostForm() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [tag, setTag] = useState('태그 추가'); // tag 상태 추가

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleContentChange = (value) => {
        setContent(value);
    };

    const handleTagChange = (event) => {
        setTag(event.target.value);
    };


    return (
        <div>
            <Button
                variant="outlined"
                onClick={handleClickOpen}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    left: '52%',
                    transform: 'translateX(-50%)',
                    zIndex: 1000,
                    width:'48%',
                    backgroundColor: '#ffffff',
                    border: 'none', // 테두리 제거
                    boxShadow: '0px 2px 10px rgba(0,0,0,0.4)', // 그림자 추가
                    padding: '10px',
                    display: 'flex',
                    height: '55px',
                    borderRadius: '50px',
                }}
            >
                <Avatar sx={{width: '30px', height: '30px',bgcolor: blue[500], marginRight:'10px'}}  />
                <span style={{ // 말풍선 스타일
                    width: '90%',
                    height: '20px',
                    backgroundColor: '#eff0f3', // 회색 배경
                    borderRadius: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'gray',
                    padding: '10px',
                }}>
                공유하고 싶은 생각이 있나요?
                    <SendIcon sx={{ color: 'gray' }}/>
            </span>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth='md'
                PaperProps={{
                    style: {
                        margin: 'auto',
                        width: '50%', // 너비를 80%로 변경
                        height: '40%', // 높이를 80%로 변경
                        position: 'fixed',
                        bottom: 50,
                        borderRadius: '10px'
                    }
                }}
                TransitionComponent={Transition} // Slide 애니메이션 추가
            >
                <DialogTitle style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Avatar sx={{width: '30px', height: '30px', bgcolor: blue[500], marginRight:'10px'}}/>
                        사용자 이름
                    </div>
                    <IconButton onClick={handleClose}>
                        <CloseIcon/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <OutlinedInput
                        autoFocus
                        margin="dense"
                        id="title"
                        placeholder="제목 (선택)"
                        style={{backgroundColor: 'white', border:'none'}} // 배경색 흰색으로 변경, 테두리 제거
                        fullWidth
                    />
                    <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                        style={{height: '100px'}}
                    />
                </DialogContent>
                <DialogActions>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Select
                            value={tag} // 상태 관리를 위한 변수
                            onChange={handleTagChange} // 상태 업데이트를 위한 핸들러 함수
                            style={{ width: '150px', height: '30px', marginLeft:'15px'}} // 사이즈 조절
                        >
                            <MenuItem value={"태그 추가"}>태그 추가</MenuItem> // 기본 값 추가
                            <MenuItem value={"tag1"}>PPS Camp</MenuItem>
                            <MenuItem value={"tag2"}>전체공지</MenuItem>
                            <MenuItem value={"tag3"}>나의 첫 웹 서비스</MenuItem>
                        </Select>
                        <Button onClick={handleClose} color="primary">
                            <SendIcon />
                        </Button>
                    </Box>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default PostForm;
