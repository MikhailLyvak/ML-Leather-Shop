interface JsonLdScriptProps {
  data: unknown
}

const JsonLdScript = ({ data }: JsonLdScriptProps) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  )
}

export { JsonLdScript }
export type { JsonLdScriptProps }
