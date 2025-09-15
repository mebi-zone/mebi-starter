import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = () => allPosts.map((p) => ({ slug: p.slug }))

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) return notFound()
  const MDX = useMDXComponent(post.body.code)
  return (
    <article className="container prose prose-olive max-w-3xl py-12">
      <h1>{post.title}</h1>
      <p className="text-charcoal/70">{new Date(post.date).toLocaleDateString('vi-VN')}</p>
      <MDX />
    </article>
  )
}
