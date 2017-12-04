import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Michael Chan`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: 1000,
          }}
        />
        <p>
          By <strong>Michael Chan</strong> the most mediocre developer in the land.
          <br />
          <a href="https://twitter.com/chantastic">
            Follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
