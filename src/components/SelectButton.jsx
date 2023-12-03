import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div>
     
      <FormControl >
        <Select
          value={type}
          onChange={handleChange}
          displayEmpty
          size='small'
          
        >
          <MenuItem value="">
            Clicks
          </MenuItem>

          <MenuItem value='cost'>Cost</MenuItem>
          <MenuItem value='conversions'>Conversions</MenuItem>
          <MenuItem value='revenue'>Revenue</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
