import React from 'react'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CardContainerRow from 'components/CardContainerRow'
import FlexRow from 'components/FlexRow'
import Mail from '@ant-design/icons/Mail'
import Phone from '@ant-design/icons/Phone'
import color from 'theme/color'

const Information = ({ user }) => {
  return (
    <div>
      <Box mx={2}>
        <Box my={1} className="Biodata">
          <Typography color="primary" style={{ fontWeight: 'bold' }}>
            Biodata
          </Typography>
          <CardContainerRow
            justifyItemRight="flex-end"
            overflowItemRight="hidden"
            itemLeft={(
              <FlexRow>
                <Typography>
                  Birth of Date
                </Typography>
              </FlexRow>
            )}
            itemRight={(
              <Typography
                style={{
                  fontWeight: 'bold',
                  display: 'block'
                }}
                noWrap
              >
                {user && user.birth}
              </Typography>
            )}
          />
          <CardContainerRow
            justifyItemRight="flex-end"
            overflowItemRight="hidden"
            itemLeft={(
              <FlexRow>
                <Typography>
                  Location
                </Typography>
              </FlexRow>
            )}
            itemRight={(
              <Typography

                style={{
                  fontWeight: 'bold',
                  display: 'block'
                }}
                noWrap
              >
                {user && user.location}
              </Typography>
            )}
          />
        </Box>

        {(user && user.email) || (user && user.phone) ? (
          <Box my={1} className="contact">
            <Typography color="primary" style={{ fontWeight: 'bold' }}>
              Contact
            </Typography>
            {user && user.phone && (
              <CardContainerRow
                justifyItemRight="flex-end"
                overflowItemRight="hidden"
                itemLeft={(
                  <FlexRow>
                    <Typography style={{
                      display: 'flex',
                      direction: 'flex-start',
                      marginRight: 6.7,
                      alignItems: 'center'
                    }}
                    >
                      <Phone style={{ color: color.primaryColor }} />
                    </Typography>
                    <Typography>
                      Phone Number
                    </Typography>
                  </FlexRow>
                )}
                itemRight={(
                  <Typography
                    style={{
                      fontWeight: 'bold',
                      display: 'block'
                    }}
                    noWrap
                  >
                    {user && user.phone}
                  </Typography>
                )}
              />
            )}
            {user && user.email && (
              <CardContainerRow
                justifyItemRight="flex-end"
                overflowItemRight="hidden"
                itemLeft={(
                  <FlexRow>
                    <Typography style={{
                      display: 'flex',
                      direction: 'flex-start',
                      marginRight: 6.7,
                      alignItems: 'center'
                    }}
                    >
                      <Mail style={{ color: color.primaryColor }} />
                    </Typography>
                    <Typography>
                      Email
                    </Typography>
                  </FlexRow>
                )}
                itemRight={(
                  <Typography
                    style={{
                      fontWeight: 'bold',
                      display: 'block'
                    }}
                    noWrap
                  >
                    {user && user.email}
                  </Typography>
                )}
              />
            )}
          </Box>
        ) : null}
      </Box>
    </div>
  )
}


const mapStateToProps = state => ({
  user: state.authStore.currentItem
})

export default connect(mapStateToProps)(Information)
