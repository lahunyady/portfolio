import React from "react";
import { useTranslation } from "react-i18next";
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    whiteColor: {
      color: "white",
      fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      fontSize:"1.2rem",
      minHeight: 0,
      padding: 0,
      top: "calc(15%)",
      minWidth: "40px"      
    }
  }));

function LanguageSwitcher() {
    const classes = useStyles();
    const [loc, setLoc] = React.useState('hu');
    const { i18n } = useTranslation();
    const handleChange = (e) => {
        i18n.changeLanguage(e.target.value);
        setLoc(e.target.value);
    };

  return (
    <FormControl className={classes.formControl}>
        <Select
            disableUnderline={true} 
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={loc}
            onChange={handleChange}
            classes={{ 
                root: classes.whiteColor,
                icon: classes.whiteColor
            }}
        >
            <MenuItem value={"en"}>EN</MenuItem>
            <MenuItem value={"hu"}>HU</MenuItem>
        </Select>
    </FormControl>
  );}

export default LanguageSwitcher;