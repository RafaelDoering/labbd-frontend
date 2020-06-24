import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

import axios from 'axios';

import { backendUrl } from './config';

export default () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${backendUrl}/dashboard/cases`);

      console.log(result)
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          { data.positiveCases ?
            <Card>
              <CardHeader title="Total de casos positivos da COVID-19" />
              <CardContent>
                <Typography variant="h6" component="p">
                  { data.positiveCases}
                </Typography>
              </CardContent>
            </Card>
            :
            <Card>
              <CardHeader title="Carregando..." />
            </Card>
          }
        </Grid>

        <Grid item xs={6}>
          { data.suspectCases ?
            <Card>
              <CardHeader title="Total de casos suspeitos da COVID-19" />
              <CardContent>
                <Typography variant="h6" component="p">
                  { data.suspectCases}
                </Typography>
              </CardContent>
            </Card>
            :
            <Card>
              <CardHeader title="Carregando..." />
            </Card>
          }
        </Grid>

        <Grid item xs={6}>
          { data.hospitals ?
            <Card>
              <CardHeader title="20 Hospitais com mais pacientes no último mês" />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Hospital</TableCell>
                        <TableCell align="right">Pacientes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        data.hospitals.map((row) => (
                          <TableRow key={row.nome}>
                            <TableCell component="th" scope="row">
                              {row.nome}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
            :
            <Card>
              <CardHeader title="Carregando..." />
            </Card>
          }
        </Grid>

        <Grid item xs={6}>
          { data.laboratories ?
            <Card>
              <CardHeader title="20 Laboratórios com mais análises realizadas no último mês" />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Laboratório</TableCell>
                        <TableCell align="right">Análises</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        data.laboratories.map((row) => (
                          <TableRow key={row.nome}>
                            <TableCell component="th" scope="row">
                              {row.nome}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
            :
            <Card>
              <CardHeader title="Carregando..." />
            </Card>
          }
        </Grid>

        <Grid item xs={6}>
          { data.citiesPositive ?
            <Card>
              <CardHeader title="20 Cidades com mais casos positivos no último mês" />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Cidade</TableCell>
                        <TableCell align="right">Casos</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        data.citiesPositive.map((row) => (
                          <TableRow key={row.cidade}>
                            <TableCell component="th" scope="row">
                              {row.cidade}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
            :
            <Card>
              <CardHeader title="Carregando..." />
            </Card>
          }
        </Grid>

        <Grid item xs={6}>
          { data.citiesSuspect ?
            <Card>
              <CardHeader title="20 Cidades com mais casos suspeitos no último mês" />
              <CardContent>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Cidade</TableCell>
                        <TableCell align="right">Casos</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        data.citiesSuspect.map((row) => (
                          <TableRow key={row.cidade}>
                            <TableCell component="th" scope="row">
                              {row.cidade}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                          </TableRow>
                        ))
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
            :
            <Card>
              <CardHeader title="Carregando..." />
            </Card>
          }
        </Grid>
      </Grid>
    </div>
  );
};
