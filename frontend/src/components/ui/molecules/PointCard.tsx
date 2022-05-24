import { Box ,Typography} from '@mui/material'

import { H3, H4 } from './../atoms'

interface IPointCard {
  TitleText: string
  Text: string
}

export const PointCard = ({
  TitleText,
  Text,
}: IPointCard) => {
  return (
    <Box
      sx={{
        m: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor : "#FFFFFF",
          border : "solid",
          borderRadius : 2,
          width: {
            sm : 250,
            xs : 200,
          },
          height : {
            sm :300,
            xs : 200,
          },
          m: 'auto',
          pl : 2,
          pr : 2,
        }}
      >
        <Typography
          sx={{
            pt: {
              sm : 2,
              xs : 1,
            },
            textAlign: 'center',
            fontSize : {
              sm : 40,
              xs : 20,
            },
          }}
        >
          {TitleText}
        </Typography>
        <H4
          sx={{
            mt: {
              sm : 6,
              xs : 1,
            },
          }}
        >
          {Text}
        </H4>
      </Box>
    </Box>
  )
}
