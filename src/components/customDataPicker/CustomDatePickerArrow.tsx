import * as React from 'react';
import Calendar from '@mui/icons-material/Event';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SingleInputDateRangePickerWithAdornment() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{ textField: { InputProps: { endAdornment: <ExpandMoreIcon sx={{  width: '25.875px',
            height: '24px' }} /> } } }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}