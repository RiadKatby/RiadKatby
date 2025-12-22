import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeMathjax from 'rehype-mathjax'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      rehypeMathjax,
      [remarkGfm, { footnotes: true }]
    ],
    rehypePlugins: [rehypeMathjax]
  },
})

export default withMDX(nextConfig)
