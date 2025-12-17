import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDateRangePicker } from "@mui/x-date-pickers-pro/DesktopDateRangePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Box } from "@mui/material";

export default function ElegantDemoContainer() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DemoContainer
          components={["DesktopDateRangePicker"]}
          sx={{
            p: 0,
            "& .MuiTypography-root": {
              display: "none", // remove demo labels
            },
            "& .MuiPickersLayout-root": {
              borderRadius: 2,
            },
          }}
        >
          <DesktopDateRangePicker
            defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
            slotProps={{
              textField: {
                size: "small",
                fullWidth: true,
                sx: {
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                },
              },
            }}
          />
        </DemoContainer>
    </LocalizationProvider>
  );
}
