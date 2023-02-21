import React from 'react'

const car = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          width: showgrid ? "95% !important" : "97% !important",
          marginX: "auto",
          paddingInline: "10px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            marginBottom: { lg: "16px", sm: "16px", md: "16px", xs: "18px" },
          }}
        >
          <Box component="main">
            <Stack
              direction={showgrid?"column":"row"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                ml={2}
                sx={{
                  fontWeight: 600,
                  fontSize: "24px",
                  color: "#3A3D4B",
                  marginLeft:"0px",
                  "@media (max-width: 450px)": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "15px",
                  },
                }}
              >
                Adlibrary Database
              </Typography>
              <Box>

              <TimerClock/>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            border: "1px solid #EBEBEB",
            borderRadius: "15px",
            padding: { lg: "16px 36px", xs: "15px 20px" },
            width: "98%",
          }}
        >
          <Box>
            <AllFilters />
          </Box>
          <Box>
            <FilterChips />
          </Box>
        </Grid>
        <Grid
          container
          justifyContent="flex-end"
          sx={{ marginTop: "10px", marginBottom: "15px" }}
        >
          <SortFilter />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <AdsList />
        </Grid>
      </Grid>
    </div>
  )
}

export default car
