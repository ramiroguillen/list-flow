// libraries
import React from 'react';
// material UI
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright ⓒ ' + new Date().getFullYear() + ' - '}
            <Link color='inherit' href='https://ramiroguillen.com.ar'>
                Ramiro Guillén
            </Link>
        </Typography>
    );
}

export default Copyright;
