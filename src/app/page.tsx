import { type Metadata } from 'next'
import Link from 'next/link'

import { CaseStudyIcon } from '@/components/CaseStudyIcon'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { CaseStudyIcon as TestimonialIcon } from '@/components/CaseStudyIcon'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

const technologies = [
  'Next.js / React',
  'TypeScript',
  'Solidity / EVM',
  'ERC-4337',
  'zero knowledge proofs',
  'AI / ML',
  'Node.js',
  'Tailwind CSS',
]

function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            technologies we build with
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {technologies.map((tech) => (
              <li key={tech}>
                <FadeIn>
                  <span className="font-display text-base font-semibold text-white">
                    {tech}
                  </span>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="building things that matter"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          we build at the intersection of blockchain and AI, turning emerging
          technology into products that solve real problems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <CaseStudyIcon name={caseStudy.logo} className="h-16 w-16 stroke-neutral-950 stroke-[1]" />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>project</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="what we do"
        title="technology with purpose, built with craft"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          software alone is not enough to create a useful product. we focus on
          building with a balance of creativity, quality, and innovation
          — using the most capable technologies available.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="software engineering">
              we design and build robust, scalable software — from web
              applications to smart contracts — using modern frameworks and
              battle-tested architectures.
            </ListItem>
            <ListItem title="blockchain & web3">
              we build on-chain systems that work: account abstraction wallets,
              zero knowledge proof pipelines, smart contract infrastructure,
              and protocol integrations.
            </ListItem>
            <ListItem title="AI & machine learning">
              we research and prototype with emerging AI technologies — from
              document ingestion pipelines to agent frameworks — and ship them
              as production-grade products.
            </ListItem>
            <ListItem title="product strategy">
              we help teams navigate complex technical decisions, from
              architecture design to technology selection, with a focus on
              long-term quality and real-world utility.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'inth3loop.org is a software organization building at the edge of innovation, focused on quality and authentic artistic products.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            welcome to th3 loop
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            a software innovation organization, building at the intersection
            of blockchain, AI, and real world use cases.
          </p>
        </FadeIn>
      </Container>

      <Technologies />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'inth3loop', logo: <TestimonialIcon name="wallet" className="h-8 w-8 stroke-neutral-950 stroke-[1]" /> }}
      >
        quality is not an act, it is a habit. we build every product with the
        conviction that authentic craftsmanship and cutting-edge technology
        are not opposites — they are the same thing.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
