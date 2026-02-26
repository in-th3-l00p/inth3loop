export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'inth3loop.org',
    url: 'https://inth3loop.org',
    founder: {
      '@type': 'Person',
      name: 'Cătălin Tișcă',
      url: 'https://tiscacatalin.com',
    },
    description:
      'a software organization building at the edge of innovation, focused on quality and authentic artistic products.',
    sameAs: [
      'https://github.com/inth3loop',
      'https://x.com/inth3loop',
    ],
  }
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function softwareProjectSchema(project: {
  name: string
  description: string
  url: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    url: project.url,
    datePublished: project.datePublished,
    applicationCategory: 'WebApplication',
    creator: {
      '@type': 'Organization',
      name: 'inth3loop.org',
      url: 'https://inth3loop.org',
    },
  }
}
