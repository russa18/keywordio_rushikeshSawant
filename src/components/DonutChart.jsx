import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


const DonutChart = () => {
  return (
    <PieChart
      series={[
        {
          data: [{ id: 0, value: 35, label: '35% Female', color: '#0096ff' },
          { id: 1, value: 25, label: '25% Unknown', color: '#323c46' },
          { id: 2, value: 40, label: '40% Male', color: '#ff823c' },
          ],
          innerRadius: 65,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 0,
          startAngle: 0,
          endAngle: 360,
          x: '50%',
          y: '50%',

        },
      ]}
      height={300}
      sx={{
        width: '100%',
        fontSize: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

      }}
    />


  )
}

export default DonutChart