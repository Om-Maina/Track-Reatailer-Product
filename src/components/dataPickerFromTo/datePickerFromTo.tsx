import React, { useState } from "react";
import dayjs from 'dayjs';
import "react-datepicker/dist/react-datepicker.css";
import "./dataPickerFromTo.css"
import ResponsiveDatePickers from "../datepicker-from-to/MobileDatePicker";

interface DatePickerWrapperProps {
  onDatesSelected: (startDate: string, endDate: string) => void;
}

const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({
  onDatesSelected,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDatesSelected = () => {
    if (startDate && endDate) {
      onDatesSelected(startDate.toISOString(), endDate.toISOString());
    }
  };

  return (
    <div className="date-picker-container">
      <label className="label-bold" > Date: </label> <label className="datapicker-label"> From</label>
      <ResponsiveDatePickers />

      <label className="datapicker-label"> To </label>
      <ResponsiveDatePickers />
    </div>
  );
};

export default DatePickerWrapper;
