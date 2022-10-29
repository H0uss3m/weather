import { Box, Typography } from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import { ExploreIconStyle } from "../../style";

const Loading = () => {
  return (
    <Box>
      <Typography variant="h5">Search your location</Typography>
      <ExploreIcon style={ExploreIconStyle} />
    </Box>
  );
};
export default Loading;
