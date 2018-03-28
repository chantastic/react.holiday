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

        <div
          style={{
            maxWidth: '16em',
            fontSize: '1.25em',
            border: '4px solid #fe0',
            padding: '.5em',
            borderRadius: '.25em',
            backgroundColor: "#ffffdd",
            textAlign: 'center',
            fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
            color: "#444",
          }}
        >
          <span style={{ marginBottom: '.5em', display: 'inline-block', fontWeight: 900 }}>
            🎉 Now on video! 📺
          </span>
          <br />
          <a
            style={{
              display: 'inline-block',
              backgroundColor: 'black',
              width: '100%',
              textAlign: 'center',
              borderRadius: ".125em",
              backgroundColor: "#ff0077",
              color: "white",
              fontWeight: 600,
              fontStyle: "oblique"
            }}
            href="https://gum.co/essential-react"
            target="_blank"
          >
            Buy, buy, buy!!!
          </a>
        </div>

        {children()}
      </Container>
    )
  }
}

export default Template
