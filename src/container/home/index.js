import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
// import { get as getSlider } from 'actions/home/sliderAction'
// import { get as getTestimonial } from 'actions/home/testimonialAction'
// import Slider from './slider'
// import HomeIntro from './HomeIntro'
// import Testimonial from './Testimonial'
// import Navigate from './Navigate'
import HeaderNotification from 'components/HeaderNotification'
import color from 'theme/color'

const styles = theme => ({
  root: {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingBottom: '2em'
  },
  primaryColor: {
    color: color.primaryColor
  },
  customBadge: {
    backgroundColor: color.primaryColor,
    color: color.white,
    padding: 0,
    alignItems: 'center',
    fontSize: '6px',
    maxHeight: '12px !important',
    minWidth: '12px !important',
    marginLeft: theme.spacing(0.62),
    marginRight: theme.spacing(0.7),
    marginTop: theme.spacing(0.8),
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 40
  },
  container: {
    margin: 0
  },
  textField: {
    minWidth: 300,
    width: '100%',
    maxWidth: 400
  },
  inputText: {
    padding: '12px 14px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px'
    // width: 40
  },
  buttonLogin: {
    fontWeight: 'bold',
    fontSize: 14
  },
  buttonContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
})

const data = {
  favorite: '15'
}

class HomeContainer extends Component {
  // componentDidMount () {
  //   const { loadHome } = this.props
  //   loadHome()
  // }

  render () {
    // const { classes, listHomeIntro } = this.props

    return (
      <div>
        {/* <HeaderNotification classes={classes} currentData={data} /> */}
        <HeaderNotification currentData={data} />
        {/* <Slider /> */}
        {/* <HomeIntro listHomeIntro={listHomeIntro} /> */}
        {/* <Testimonial /> */}
        {/* <div className={classes.root}> */}
        {/* <Navigate /> */}
        {/* </div> */}
      </div>
    )
  }
}

// HomeContainer.propTypes = {
//   classes: PropTypes.object.isRequired,
//   loadHome: PropTypes.func.isRequired
// }

const mapStateToProps = () => ({})

// const mapDispatchToProps = dispatch => ({
//   loadHome: () => {
//     dispatch(getSlider())
//     dispatch(getTestimonial())
//   }
// })
// ,mapDispatchToProps
export default connect(mapStateToProps)(withStyles(styles)(HomeContainer))
