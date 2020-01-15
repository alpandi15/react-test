import React from 'react'
import Box from '@material-ui/core/Box'
import CardContainerRow from 'components/CardContainerRow'
import ButtonPrimary from 'components/ButtonPrimary'
import color from 'theme/color'

const Invitation = () => {
  return (
    <div>
      <Box p={2}>
        <CardContainerRow
          itemJustifyContent="center"
          itemLeft={(
            <ButtonPrimary
              padding="8px 2em"
              title="Accept"
            />
          )}
          itemCenter={(
            <ButtonPrimary
              padding="8px 2em"
              title="Decline"
              color={color.primaryColor}
              backgroundColor={color.white}
            />
          )}
        />
      </Box>
    </div>
  )
}

export default Invitation
