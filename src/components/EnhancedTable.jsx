import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';

import { visuallyHidden } from '@mui/utils';

function createData(id, campaigns, clicks, cost, conversions, revenue) {
  return {
    id,
    campaigns,
    clicks,
    cost,
    conversions,
    revenue,
  };
}
const rows = [
  createData(1, 'Cosmetics', 712, 4272, 8, 16568),
  createData(2, 'Serums', 3961, 27331, 115, 362526),
  createData(3, 'Facewash', 9462, 76831, 123, 266800),
  createData(4, 'Shampoos', 439, 2151, 5, 11029),
  createData(5, 'Conditioners', 1680, 3864, 49, 175245),
  createData(6, 'Facewash 2', 4978, 29370, 189, 623106),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'campaigns',
    numeric: false,
    disablePadding: true,
    label: 'Campaigns',
  },
  {
    id: 'clicks',
    numeric: true,
    disablePadding: false,
    label: 'Clicks',
  },
  {
    id: 'cost',
    numeric: true,
    disablePadding: false,
    label: 'Cost',
  },
  {
    id: 'conversions',
    numeric: true,
    disablePadding: false,
    label: 'Conversions',
  },
  {
    id: 'revenue',
    numeric: true,
    disablePadding: false,
    label: 'Revenue',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };


  return (
    <TableHead >
      <TableRow >

        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className='font-bold'
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function EnhancedTable({ size }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('campaigns');
  const [page, setPage] = React.useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rows.length,
        page * rows.length + rows.length,
      ),
    [order, orderBy, page, rows.length],
  );

  return (

    <Paper sx={{ width: '100%', mb: 2 }}>
      <TableContainer>
        <Table
          sx={{ minWidth: 360 }}
          aria-labelledby="tableTitle"
          size={size}

        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}

          />
          <TableBody>
            {visibleRows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  tabIndex={-1}
                  key={row.id}
                  sx={{ cursor: 'pointer', color: '#929ca4' }}
                >

                  <TableCell
                    component="th"
                    id={labelId}
                    scope="row"
                    sx={{ color: '#929ca4' }}

                  >
                    {row.campaigns}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#929ca4' }}
                  >{row.clicks}</TableCell>
                  <TableCell align="right" sx={{ color: '#929ca4' }}
                  >USD {(row.cost).toLocaleString('en-IN')}</TableCell>
                  <TableCell align="right" sx={{ color: '#929ca4' }}
                  >{row.conversions}</TableCell>
                  <TableCell align="right" sx={{ color: '#929ca4' }}
                  >USD {(row.revenue).toLocaleString('en-IN')}</TableCell>
                </TableRow>
              );
            })}
            <TableRow
              hover
             
              sx={{ cursor: 'pointer', color: '#929ca4' }}
            >

              <TableCell
               component="th"
               scope="row"
               sx={{ color: '#929ca4' }}
              >
                Total
              </TableCell>
              <TableCell align="right" sx={{ color: '#929ca4' }}>26,510</TableCell>
              <TableCell align="right" sx={{ color: '#929ca4' }}>USD 1,43,819</TableCell>
              <TableCell align="right" sx={{ color: '#929ca4' }}>489</TableCell>
              <TableCell align="right" sx={{ color: '#929ca4' }}>USD 15,73,563</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>

    </Paper>


  );
}
