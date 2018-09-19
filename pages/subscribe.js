import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import NProgress from 'nprogress'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { styleTextField } from '../components/sharedStyles'
import withLayout from '../lib/withLayout'
import { subscribeToNewsletter } from '../lib/api/public'

const styles = {
  root: {
    padding: '10px 45px'
  },
  styleTextField
}

class Subscribe extends Component {
  onSubmit = async (e) => {
    e.preventDefault()

    const email = (this.emailInput && this.emailInput.value) || null

    if (this.emailInput && !email) {
      return
    }

    NProgress.start()

    try {
      await subscribeToNewsletter({ email })

      if (this.emailInput) {
        this.emailInput.value = ''
      }

      NProgress.done()
    } catch (error) {
      console.log(err)
      NProgress.done()
    }
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <form onSubmit={this.onSubmit}>
          <p>Your email will be added to Mailchimp list and you will get confirmation email:</p>
          <TextField
            inputRef={elm => {
              this.emailInput = elm
            }}
            type="email"
            label="Type your email"
            className={classes.styleTextField}
            required
          />
          <p />
          <Button variant="flat" color="primary" type="submit">
            Subscribe
          </Button>
        </form>
      </div>
    )
  }
}

Subscribe.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withLayout(withStyles(styles)(Subscribe))
