import React from 'react';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: yellow[500],
        },
    },
});

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

// Data for API
function createData(name, dob, height, weight, homeworld, species) {
    return { name, dob, height, weight, homeworld, species };
}

const rows = [
    createData(
        'Luke Skywalker',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE'
    ),
    createData(
        'Chewbacca',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE'
    ),
    createData(
        'Han Solo',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE'
    ),
    createData(
        'Yoda',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE'
    ),
    createData(
        'Anakin Skywalker',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE',
        'DATA HERE'
    ),
];

const Main = () => {
    const classes = useStyles();
    return (
        <div className='main__search'>
            <h1>Search Here For A Character</h1>
            <ThemeProvider theme={theme}>
                <TextField
                    id='filled-full-width'
                    type='text'
                    label='Search For'
                    //color='secondary'
                    style={{ margin: 8 }}
                    placeholder='Ex. Luke Skywalker'
                    fullWidth
                    margin='normal'
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant='filled'
                />
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align='right'>DOB</TableCell>
                                <TableCell align='right'>Height</TableCell>
                                <TableCell align='right'>Weight (lb)</TableCell>
                                <TableCell align='right'>Homeworld</TableCell>
                                <TableCell align='right'>Species</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component='th' scope='row'>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.dob}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.height}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.weight}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.homeworld}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {row.species}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <Pagination
                                    count={10}
                                    variant='outlined'
                                    color='primary'
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </div>
    );
};

export default Main;
