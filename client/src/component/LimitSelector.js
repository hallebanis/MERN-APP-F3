import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { getPost } from '../redux/actions/postActions';

export default function LimitSelector({ setLimit }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = (e) => {
        setAnchorEl(null);
        dispatch(getPost(1, +e.target.value))
        setLimit(+e.target.value)
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                sletec number of post per page
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem value={5} onClick={handleClose}>5</MenuItem>
                <MenuItem value={7} onClick={handleClose}>7</MenuItem>
                <MenuItem value={9} onClick={handleClose}>9</MenuItem>
            </Menu>
        </div>
    );
}
