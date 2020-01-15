import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import { connect } from 'react-redux'
import { reduxForm, Field, getFormValues } from 'redux-form'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import { changeFilter } from 'actions/product/productAction'
import validate from './validate'

const styles = theme => ({
  container: {
    padding: theme.spacing(2)
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  textField: {
    width: '100%'
  }
})

class SearchBar extends Component {
  searchProduct = () => {
    const { values, dispatch } = this.props
    if (values) {
      dispatch(changeFilter({
        q: values.q,
        categoryId: null,
        page: 1
      }))
    } else {
      dispatch(changeFilter({
        q: null,
        page: 1
      }))
    }
  }

  renderInput = ({
    label,
    input,
    placeholder,
    autoFocus,
    disabled,
    classes,
    meta: {
      touched,
      error
    },
    ...other
  }) => {
    return (
      <FormControl className={classes.textField} error={error && touched}>
        <InputBase
          onKeyPress={(event) => {
            if (event.key === 'Enter') this.searchProduct()
          }}
          className={classes.input}
          placeholder="Cari dengan kata kunci atau nama produk"
          inputProps={{ 'aria-label': 'search product' }}
          {...input}
          {...other}
        />
        {error && touched && <FormHelperText id="component-error-text">{error}</FormHelperText>}
      </FormControl>
    )
  }

  render () {
    const {
      classes
    } = this.props
    return (
      <div className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Paper className={classes.root}>
            <Field
              name="q"
              label="Kata kunci"
              placeholder="Nama produk, material, atau kata kunci"
              maxLength={30}
              type="text"
              component={this.renderInput}
            />
            <IconButton onClick={this.searchProduct} className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  values: getFormValues('SearchProduct')(state),
  filter: state.productStore.filter
})

export default reduxForm({
  form: 'SearchProduct',
  validate
})(connect(mapStateToProps)(withStyles(styles)(SearchBar)))
