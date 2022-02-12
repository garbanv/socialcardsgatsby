import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = ({ customTitle, customDescription, customUrl, customImage,title,img }) => {
  const {
    site: {
      siteMetadata: { siteUrl, image, description, language, keywords },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
        siteUrl
          title
          description

        }
      }
    }
  `)


  const seoDescription = customDescription
    ? customDescription.seoDescription
    : description
  const seoUrl = customUrl ? `${siteUrl}/${customUrl}` : siteUrl
  const seoImage = customImage
    ? `https://${customImage.gatsbyImageData.images.fallback.src.replace(
        /\/\//g,
        ''
      )}`
    : `${siteUrl}/${image}`

  return (
    <Helmet>
      {/* Default / HTML */}
      <html lang={language} />
      <title>{title}</title>
      <link rel="canonical" href={seoUrl} />

      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={img} />
      <meta name="keywords" content={keywords ? keywords.join(', ') : null} />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={img} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  )
}

Seo.propTypes = {
  /** A custom HTML title that overwrites the default title */
  customTitle: PropTypes.string,
  /** A custom meta description that overwrites the default description */
  customDescription: PropTypes.string,
  /** A custom meta url that overwrites the default url */
  customUrl: PropTypes.string,
  /** A custom open graph image that overwrites the default image */
  customImage: PropTypes.any,
}

export default Seo