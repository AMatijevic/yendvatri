type SectionProps = {
  title?: string,
  children: React.ReactNode
}

export const Section = ({ title = "Default Title", children }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}