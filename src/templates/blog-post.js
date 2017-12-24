import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

// TODO: make dynamic
const postUrl = date =>
  `https://react.holiday/${date.getFullYear()}/${date.getDate()}/`

const nextUrl = date => `/${date.getFullYear()}/${date.getDate() + 1}/`

const prevUrl = date => `/${date.getFullYear()}/${date.getDate() - 1}/`

class BlogPostTemplate extends React.Component {
  constructor() {
    super()

    this.state = {
      input: '',
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const url = postUrl(new Date(post.frontmatter.date))

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`}>
          <meta
            property="og:title"
            content={`${post.frontmatter.title} | react.holiday`}
          />
          <meta property="og:type" content="article" />
          {/*
          <meta
            property="og:description"
            content={}`}
          />
          */}
          <meta property="og:url" content={url} />
          <meta
            property="og:image"
            content="https://react.holiday/react-holiday-og.jpg"
          />
        </Helmet>
        <h1 className="measure">{post.frontmatter.title}</h1>
        {/*<p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 32,
          }}
        >
          {(new Date(post.frontmatter.date)).getDate() > 1 && (
            <Link to={prevUrl(new Date(post.frontmatter.date))}>
              ← Previous
            </Link>
          )}
          <div />
          {(new Date(post.frontmatter.date)).getDate() < 24 && (
            <Link to={nextUrl(new Date(post.frontmatter.date))}>Next →</Link>
          )}
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <div id="mc_embed_signup">
          <form
            action="https://learnreact.us9.list-manage.com/subscribe/post?u=03b6ee2f58c8b4427c8ba9735&amp;id=f97aebbc64"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll" style={{ marginTop: rhythm(2) }}>
              <h3>Learn other React stuff...</h3>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL" />
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="email"
                  onChange={e => this.setState({ input: e.target.value })}
                  value={this.state.value}
                  style={{
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#aaa',
                    borderStyle: 'solid',
                    paddingLeft: '.5em',
                    paddingRight: '.5em',
                  }}
                />
              </div>
              <div
                id="mce-responses"
                className="clear"
                style={{ paddingBottom: '8px' }}
              >
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: 'none' }}
                />
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: 'none' }}
                />
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px' }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_03b6ee2f58c8b4427c8ba9735_f97aebbc64"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button subscribe-button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
