import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const { pageContext } = this.props;
    const appName = 'Manny Colon';
    const shortDescription = 'Newsletter';
    const description = 'Newsletter';
    const url = '';
    const thumbnailUrl = `${url}/static/images/thumbnail.jpg`;
    const twitterUsername = '@_mannycolon';
    const emailAddress = 'colonmanuel7@gmail.com';
    const classification = 'Business';
    const keywords = 'Manny, Colon, software, developer, newsletter';
    const title = `${appName} | ${shortDescription}`

    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=0, initial-scale=1, ' +
              'minimum-scale=1, width=device-width, height=device-height'
            }
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={pageContext.theme.palette.primary.main} />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords}/>
          <meta name="Classification" content={classification}/>
          <meta name="author" content={appName}/>
          <meta name="url" content={url}/>
          <meta name="identifier-URL" content={url}/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta content="yes" name="apple-touch-fullscreen" />
          <meta name="apple-mobile-web-app-status-bar-style" content={pageContext.theme.palette.primary.main}/>

          <link rel="canonical" href={url} />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel='stylesheet' href='/_next/static/style.css'/>

          <meta property="og:type" content="website"/>
          <meta property="og:title" content={description}/>
          <meta property="og:url" content={url}/>
          <meta property="og:image" content={thumbnailUrl}/>
          <meta property="og:description" content={description}/>
          <meta property="og:site_name" content={appName}/>
          <meta name="og:email" content={emailAddress}/>

          <meta name="fb:page_id" content="780810032043953"/>
          <meta name="twitter:site" content={twitterUsername}/>
          <meta name="twitter:creator" content={twitterUsername}/>
          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:image" content={thumbnailUrl}/>
          <meta name="twitter:title" content={appName}/>
          <meta name="twitter:description" content={description}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
        />
        {null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
