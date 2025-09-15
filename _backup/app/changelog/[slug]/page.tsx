import { allChanges } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = () => allChanges.map((p) => ({ slug: p.slug }))

export default function ChangeItem({ params }: { params: { slug: string } }) {
  const item = allChanges.find(p => p.slug === params.slug)
  if (!item) return notFound()
  const MDX = useMDXComponent(item.body.code)
  return (
    <article className="container prose prose-olive max-w-3xl py-12">
      <h1>{item.title}</h1>
      <p className="text-charcoal/70">{new Date(item.date).toLocaleDateString('vi-VN')}</p>
      <MDX />
    </article>
  )
}
