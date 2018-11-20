import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import './prism.css'
import './other.css'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            React {'🎄'}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            // marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            React {'🎄'}
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          // maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}

        <link
          href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <style type="text/css">
          {`
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
     `}
        </style>
        <div id="mc_embed_signup">
          <form
            action="https://learnreact.us9.list-manage.com/subscribe/post?u=03b6ee2f58c8b4427c8ba9735&amp;id=f97aebbc64"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
            style={{ margin: 0, padding: 0 }}
          >
            <div id="mc_embed_signup_scroll">
              <label htmlFor="mce-EMAIL">
                Subscribe for December 2018!
              </label>
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
              <div
                style={{ position: 'absolute', left: -5000 }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_03b6ee2f58c8b4427c8ba9735_f97aebbc64"
                  tabIndex="-1"
                />
              </div>
              <div>
                <input type="hidden" name="SOURCE" value="react.holiday" />
              </div>
              <div className="clear">
                <input        
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>

        <br />
        <p>
          We'll start from basics and get all the way to Suspense, Hooks, and advanced composition!
          <br />
          Each day is a 2-3 minute read with CodeSandbox and quick assignments.
          <br />
          Check out 2017 (below) for examples.
          </p>

        {/*
        <div
          style={{
            maxWidth: '16em',
            fontSize: '1.25em',
            border: '4px solid #fe0',
            padding: '.5em',
            borderRadius: '.25em',
            backgroundColor: '#ffffdd',
            textAlign: 'center',
            fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
            color: '#444',
          }}
        >
          <span
            style={{
              marginBottom: '.5em',
              display: 'inline-block',
              fontWeight: 900,
            }}
          >
            🎉 Now on video! 📺
          </span>
          <br />
          <a
            style={{
              display: 'inline-block',
              backgroundColor: 'black',
              width: '100%',
              textAlign: 'center',
              borderRadius: '.125em',
              backgroundColor: '#ff0077',
              color: 'white',
              fontWeight: 600,
              fontStyle: 'oblique',
            }}
            href="https://learnreact.com/courses/2018-essential-react"
            target="_blank"
          >
            Buy, buy, buy!!!
          </a>
        </div>
          */}

        {children()}
      </Container>
    )
  }
}

export default Template
