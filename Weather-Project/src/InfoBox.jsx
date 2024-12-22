import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import rainImg from './assets/Raining.avif';
import winterImg from './assets/Winter.jpg';
import summerImg from './assets/Summer.avif';

export const InfoBox = ({info}) => {
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 745 }}>
                    <CardMedia
                        sx={{ height: 340 }}
                        image={
                            info.humidity > 60 ? winterImg
                            : (info.temp > 25 ?
                                summerImg : rainImg)
                        }
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather - {info.city}
                            {info.humidity > 60
                            ? <ThunderstormIcon />
                            : info.temp > 25 
                            ? <WbSunnyIcon />
                            : <AcUnitIcon />}
                        </Typography>
                    </CardContent>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Feels_Like</TableCell>
                                <TableCell align="right">Haze</TableCell>
                                <TableCell align="right">Humidity</TableCell>
                                <TableCell align="right">Temp</TableCell>
                                <TableCell align="right">Temp_Min</TableCell>
                                <TableCell align="right">Temp_Max</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">{info.feelsLike}</TableCell>
                                <TableCell align="right">{info.haze}</TableCell>
                                <TableCell align="right">{info.humidity}</TableCell>
                                <TableCell align="right">{info.temp}&deg;C</TableCell>
                                <TableCell align="right">{info.tempMin}&deg;C</TableCell>
                                <TableCell align="right">{info.tempMax}&deg;C</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </Card>
            </div>
        </div>
    );
}
