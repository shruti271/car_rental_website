import { makeStyles } from '@material-ui/core';
import { Box, Button, Grid, InputBase, Popover, Slider, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
// import { Arrowdown } from './assets/svg/Arrowdown.svg';
import Arrowdown from "./assets/svg/Arrowdown.svg";
import ResetButton from './Components/ResetButton';

const useStyles = makeStyles((theme) => ({

  filterBtn: {
    "&:hover": {
      border: "1px solid #EBEBEB !important",
    },
  },
  DropDownArrow: {
    marginLeft: theme.spacing(1),
  },
}));


const Home = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      Home Page is in progress...!
      {/* <Stack
        direction={"row"}
        sx={{ border: "1px solid #EBEBEB", borderRadius: 2 }}
      >

        <InputBase
          value={searchBarValue}
          fullWidth
          placeholder="Search"
          onKeyUp={(e) => {
          }}
          onChange={(e) => {
            setSearchBarValue(e.currentTarget.value)
          }}
          size="large"
          sx={{ paddingLeft: "15px" }}
        />
      </Stack> */}

      {/* <Grid item lg={11} md={12} sm={12} xs={12}>
        <Button
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
          }}
          size="large"
          // variant="outlined"
          disableElevation
          disableRipple
          sx={{
            color: "#2B2F42",
            whiteSpace: "nowrap",
            border: "1px solid #EBEBEB",
            borderRadius: "10px",
            marginRight: "14px",
            marginTop: "22px",
            "@media (max-width: 450px)": {
              width: "100%",
            },
          }}
          className={classes.filterBtn}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Typography
              noWrap
              textTransform="capitalize"
              sx={{ fontWeight: 500 }}
            >
              {"Price"}
            </Typography>
          </Box>
          <img
            alt="arrowdown"
            src={Arrowdown}
            className={classes.DropDownArrow}
          />
        </Button>
        <Popover
          anchorEl={anchorEl}
          open={open}
          add={open ? "simple-popover" : undefined}
          onClose={() => {
            setAnchorEl(null);
          }}
          transformOrigin={{
            horizontal: "left",
            vertical: "top",
          }}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
        >
          
          <Box sx={{ width: "190px" ,padding:"20px"}}>



            <Slider
              id="adcount"
              size="small"
              value={
                2
              }
              min={
                10
              }
              max={
                100
              }
              sx={{ color: "#00CBFF" }}
              onChangeCommitted={(e) => {

              }}
              onChange={(e) => {

              }}
            />
            <ResetButton
              onResetFunction={() => {

                console.log("shruti pressed reset button")
              }}
              style={{
                fontWeight: 600,
                color: "#00CBFF",
                textTransform: "none",
              }}
              borderWidth={3}
            >
              <Typography
                paddingLeft={1}
                paddingRight={1}
                style={{
                  textTransform: "none",
                  color: "url(#linearColors)",
                }}
                variant="p"
              >
                Reset
              </Typography>
            </ResetButton>
          </Box>
          
        </Popover>
      </Grid> */}
    </div>
  )
}

export default Home
