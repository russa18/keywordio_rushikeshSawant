import React, { useState } from 'react'
import EnhancedTable from './EnhancedTable'
import DonutChart from './DonutChart'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SelectButton from './SelectButton';


export const Dashboard = () => {
  const [toggleAd, setToggleAd] = useState('chart')

  function changeView() {
    setToggleAd((prev) => (prev === 'chart' ? 'table' : 'chart'))
  }
  return (
    <div className='m-auto p-5 flex flex-col md:flex-row w-full flex-wrap'>
      <div className='w-full md:w-[48%] mx-auto border-2 p-2 rounded-md'>
        <Typography
          sx={{ flex: '1 1 100%' }}
          id="tableTitle"
          component="div"
          className='border-b-2 border-b-slate-200 text-lg'

        >
          Ad Insights
        </Typography>
        <EnhancedTable size='medium' />
      </div>
      <div className='w-full md:w-[48%] mx-auto border-2 p-2 rounded-md '>
        <Typography
          sx={{ flex: '1 1 100%' }}
          id="tableTitle"
          component="div"
          className='border-b-2 border-b-slate-200 text-lg flex justify-between items-center'
        >
          Ad Insights

          {toggleAd === 'chart' ? <SelectButton /> : null}

        </Typography>
        {toggleAd === 'chart' ? <DonutChart /> : <EnhancedTable size='small' />}


        <div className='mt-6 flex justify-end '>

          <ToggleButtonGroup
            value={toggleAd}
            exclusive
            onChange={changeView}
          >
            <ToggleButton value="chart" aria-label="chart " >
              <DonutLargeOutlinedIcon className={`${toggleAd === 'chart' ? 'text-blue-600' : 'text-slate-500'} `} />
            </ToggleButton>

            <ToggleButton value="table" aria-label="table ">
              <TableChartOutlinedIcon className={`${toggleAd === 'table' ? 'text-blue-600' : 'text-slate-500'}`} />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </div>
  )
}
