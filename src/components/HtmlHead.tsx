import React from 'react'
import { Head } from 'react-static'

interface IHtmlHeadProps {
  title: string
  description: string
  keywords: string
}

const HtmlHead: React.FC<IHtmlHeadProps> = props => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="author" content="Vijay Pushkin" />
    </Head>
  )
}

export default HtmlHead
