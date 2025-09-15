import Link from 'next/link'
import { allChanges } from 'contentlayer/generated'

export default function ChangelogIndex() {
  const items = allChanges.sort((a,b) => (a.date < b.date ? 1 : -1))
  return (
    <section className="container py-14">
      <h1 className="text-3xl font-extrabold text-olive mb-6">Changelog</h1>
      <div className="grid gap-4">
        {items.map(p => (
          <Link key={p.slug} href={p.url} className="card p-5 hover:border-olive/50">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-charcoal/70">{new Date(p.date).toLocaleDateString('vi-VN')}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
