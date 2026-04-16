type SectionIntroProps = {
  eyebrow: string
  title: string
  body?: string
  align?: 'left' | 'center'
}

export function SectionIntro({ eyebrow, title, body, align = 'left' }: SectionIntroProps) {
  const centered = align === 'center'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {body ? <p className="body-copy mt-4">{body}</p> : null}
    </div>
  )
}
