import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'


Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const styles = {
  root: {
    flexGrow: 1,
  }
}

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Link prefetch href="/" as="/">
          <a>
            <Avatar
              src="https://storage.googleapis.com/builderbook/logo.svg"
              alt="Builder Book logo"
              style={{ margin: '0px auto 0px 20px' }}
            />
          </a>
        </Link>
        <Link prefetch href="/login" as="/login">
          <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
        </Link>
      </Toolbar>
    </AppBar>
  </div>
)

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
