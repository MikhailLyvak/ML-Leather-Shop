function getEnvSiteUrl() {
  const fromPublicEnv = process.env.NEXT_PUBLIC_SITE_URL

  if (fromPublicEnv) {
    return new URL(fromPublicEnv)
  }

  return null
}

export function getPublicSiteUrl() {
  return getEnvSiteUrl()
}

export function getMetadataBase() {
  return getEnvSiteUrl() ?? new URL("http://localhost:3000")
}

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, getMetadataBase()).toString()
}
