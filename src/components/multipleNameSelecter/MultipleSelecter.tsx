import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "./MultipleSelecter.css";

interface MultipleSelectProps {
  label: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const styles: React.CSSProperties = {
  borderRadius: "10px",
  border: "2px solid #C8E9FF",
  width: "218px",
  height: "63px",
  flexShrink: 0,
};

const CustomDropDownIcon: React.FC = () => {
  return (
    <KeyboardArrowDownIcon
      sx={{
        marginRight:'10px',
        width: "35px !important",
        height: "35px !important",
        flexShrink: 0,
        // strokeWidth: "0.5px !important,
        color: "#96ADBB", 
      }}
    />
  );
};

const MultipleSelect: React.FC<MultipleSelectProps> = ({ label }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, ...styles }}>
        <InputLabel
          id="demo-multiple-name-label"
          sx={{
            color: "#96ADBB", 
            fontFamily: "Poppins",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          MenuProps={{
            ...MenuProps,
            PaperProps: {
              style: styles,
            },
          }}
          IconComponent={CustomDropDownIcon}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={{ ...getStyles(name, personName, theme) }}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
