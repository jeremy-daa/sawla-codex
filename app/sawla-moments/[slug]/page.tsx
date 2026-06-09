import type { Metadata } from 'next'
import { buildMetadata, guideKeywords } from '@/lib/seo'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { moments } from '@/data/siteData'
type MomentRecord = { slug: string; title: string; category: string; location: string; readTime: string; excerpt: string; content?: string }
import Arrow from '@/components/ui/Arrow'
import SchemaScript from '@/components/ui/SchemaScript'
import { generateArticleSchema, graphSchema, webPageSchema } from '@/lib/schema'
import MarkdownLite from '@/components/ui/MarkdownLite'
export function generateStaticParams() { return moments.map((m) => ({ slug: m.slug })) }

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params; const m=moments.find(x=>x.slug===slug); if(!m)return{}; return buildMetadata({title:m.title, description:m.excerpt, path:`/sawla-moments/${m.slug}`, keywords:guideKeywords(m.title, m.category), type:'article'})}
export default async function MomentPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params; const m = moments.find(x => x.slug === slug) as MomentRecord | undefined; if (!m) { notFound() } const path=`/sawla-moments/${m.slug}`; const schema=graphSchema([webPageSchema({path,name:m.title,description:m.excerpt,breadcrumb:[{name:'Home',url:'/'},{name:'Sawla Moments',url:'/sawla-moments'},{name:m.title,url:path}]}),generateArticleSchema({title:m.title,slug:m.slug,description:m.excerpt,section:'Sawla Moments'})]); return <><SchemaScript data={schema}/><section className="bg-volcanic px-6 pb-24 pt-44 text-ivory md:px-12 md:pt-52"><div className="mx-auto max-w-container"><p className="label-eyebrow">{m.category} · {m.location} · {m.readTime}</p><h1 className="mt-6 max-w-5xl font-display text-display-xl font-light leading-none">{m.title}</h1><p className="mt-8 max-w-2xl font-body text-body-md text-ivory/60">{m.excerpt}</p></div></section><article className="section-padding bg-ivory"><div className="container-max grid gap-14 lg:grid-cols-[0.7fr_1fr]"><aside><p className="label-eyebrow">Sawla editorial</p><h2 className="mt-5 font-display text-display-md font-light text-volcanic">Stories that explain how we see Ethiopia.</h2><p className="mt-6 font-body text-sm leading-7 text-warmgrey">Sawla Moments supports SEO, AIO and LLM discovery by connecting emotion, place knowledge and practical travel context.</p><Link href="/enquire" className="btn-primary-dark mt-9">Plan a Related Journey <Arrow /></Link></aside><div className="max-w-prose"><MarkdownLite content={m.content || m.excerpt}/></div></div></article></>}
