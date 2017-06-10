import React from "react"

import { rhythm } from "../utils/typography"

const DocsTemplate = React.createClass({
  render() {
    return (
      <div>
        <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: this.props.data.markdownRemark.html,
          }}
        />
      </div>
    )
  },
})

export default DocsTemplate

export const pageQuery = graphql`
  query TemplateDocsMarkdown($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`
