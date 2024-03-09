export const styles = {
    container:{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      },
      navContainer:{
        pt: { xs: 0, md: 5 },
        pb: { xs: 0, md: 5 },
        borderRight: 2,
        borderBottom: 2,
        borderColor: "grey.300",
      },
      outletContainer:{
        backgroundColor: "grey.300",
        height:"100%",
        overflowY: "auto",
        flexGrow:1,
        padding:{xs:"5px 0px", md:"10px"}
      }
}