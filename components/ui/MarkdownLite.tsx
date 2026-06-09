function clean(text: string) {
  return text.replace(/\*\*/g, '').trim()
}

export default function MarkdownLite({ content }: { content: string }) {
  const normalized = content
    .replace(/\s###\s/g, '\n### ')
    .replace(/\s##\s/g, '\n## ')
    .replace(/\s#\s/g, '\n# ')
    .replace(/\s-\s/g, '\n- ')

  const blocks = normalized.split(/\n+/).map((block) => block.trim()).filter(Boolean)

  return (
    <div className="space-y-7">
      {blocks.map((block, index) => {
        if (block.startsWith('# ')) {
          return <h2 key={index} className="font-display text-display-md font-light leading-tight text-volcanic">{clean(block.replace(/^#\s+/, ''))}</h2>
        }
        if (block.startsWith('## ')) {
          return <h3 key={index} className="pt-3 font-display text-3xl font-light leading-tight text-volcanic">{clean(block.replace(/^##\s+/, ''))}</h3>
        }
        if (block.startsWith('### ')) {
          return <h4 key={index} className="pt-2 font-display text-2xl font-light leading-tight text-volcanic">{clean(block.replace(/^###\s+/, ''))}</h4>
        }
        if (block.startsWith('- ')) {
          return <p key={index} className="border-l-2 border-gold/50 pl-5 font-body text-body-md leading-8 text-warmgrey">{clean(block.replace(/^-\s+/, ''))}</p>
        }
        return <p key={index} className="font-body text-body-md leading-8 text-warmgrey">{clean(block)}</p>
      })}
    </div>
  )
}
