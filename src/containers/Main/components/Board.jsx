import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />  
  
  return (
    <Grid container spacing={1}>
            
      <Grid item xs={12} md={4}>
          <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>

      <Grid item xs={12} md={6}>
          <Card value={getValue(deaths)} label="Total de óbitos" color="#FF0000" />
      </Grid>

      <Grid item xs={12} md={4}>
          <Card value={getValue(todayCases)} label="Casos de hoje" color="#000" />
      </Grid>

      <Grid item xs={12} md={6}>
          <Card value={getValue(todayDeaths)} label="Óbitos de hoje" color="#E95070" />
      </Grid>

      <Grid item xs={12} md={6}>
          <Card value={getValue(recovered)} label="Recuperados" color="#008000" />
      </Grid>
      
    </Grid>
  )
}

export default memo(Board)