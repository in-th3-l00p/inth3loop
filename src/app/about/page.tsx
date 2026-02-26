import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="our culture"
        title="build what matters, build it well."
        invert
      >
        <p>
          we are a small, focused team that believes the best products come
          from people who care deeply about both the technology and the outcome.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="craftsmanship" invert>
            every line of code, every design decision, every architecture choice
            is made with intention. we don't ship "good enough" — we ship work
            we are proud to put our name on.
          </GridListItem>
          <GridListItem title="curiosity" invert>
            the best solutions come from people who never stop asking "why" and
            "what if." we research before we build, and we build to learn as
            much as to ship.
          </GridListItem>
          <GridListItem title="honesty" invert>
            we tell you what we think, not what you want to hear. if an idea
            won't work, we say so early. if something will take longer, we say
            that too. trust is built on transparency.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'founder',
    people: [
      {
        name: 'Cătălin Tișcă',
        role: 'founder & lead engineer',
        image: { src: imageLeslieAlexander },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'about us',
  description:
    'inth3loop.org is a software organization at the intersection of technology and art, building quality-driven products with blockchain and AI.',
}

export default async function About() {
  // let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="about us" title="building at the edge of what's possible">
        <p>
          inth3loop.org is a software organization focused on the latest
          innovations in technology — building quality-driven, authentic
          products that push boundaries while staying grounded in real-world
          utility.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            founded by Cătălin Tișcă, inth3loop started from a simple
            conviction: the most impactful technology is built at the
            intersection of disciplines. blockchain and AI are not just tools
            — they are fundamental shifts in how software can work. we build
            products that ride those shifts.
          </p>
          <p>
            from smart contract wallets that give AI agents autonomous
            payment capabilities, to cryptographic verification layers that
            replace trust with proof — every project we take on exists
            because we believe the technology is ready and the problem is
            real.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label="products shipped" />
          <StatListItem value="100%" label="open source" />
          <StatListItem value="2026" label="year founded" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="from the blog"
        intro="thoughts on building at the intersection of blockchain, AI, and real world problems."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </RootLayout>
  )
}
