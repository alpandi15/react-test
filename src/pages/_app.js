import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/styles'
import withRedux from 'next-redux-wrapper'
import Box from '@material-ui/core/Box'
import Router from 'next/router'
import NProgress from 'nprogress'
import OfflineSupport from 'components/OfflineSupport'
import CustomHelmet from 'components/CustomHelmet'
import getPageContext from 'utils/getPageContext'
import store from 'store'
import theme from 'theme'

Router.events.on('routeChangeStart', () => NProgress.start())

Router.events.on('routeChangeComplete', () => NProgress.done())

Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  constructor () {
    super()
    this.pageContext = getPageContext()
  }

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <OfflineSupport />
          <Provider store={store}>
            <CustomHelmet />
            <MuiThemeProvider
              theme={theme}
            >
              <CssBaseline />
              <Container maxWidth="sm" style={{ padding: '0px' }}>
                <Component pageContext={this.pageContext} {...pageProps} />
              </Container>
            </MuiThemeProvider>
          </Provider>
          <Box mb={10} />
        </MuiPickersUtilsProvider>
      </React.Fragment>
    )
  }
}

const makeStore = () => {
  return store
}

export default withRedux(makeStore)(withStyles({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    },
    body: {
      margin: '0px',
      fontFamily: [
        'sans-serif',
        'mosk',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    }
  }
})(MyApp))
