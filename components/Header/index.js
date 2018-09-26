import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const styles = {
  root: {
    flexGrow: 1,
    fontFamily: 'Prime'
  }
}

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Link prefetch href="/" as="/">
          <a>
            <h3>MannyColon.tech</h3>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
