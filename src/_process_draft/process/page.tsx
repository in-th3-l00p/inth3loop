import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          every project starts with understanding the{' '}
          <strong className="font-semibold text-neutral-950">problem</strong>{' '}
          deeply enough to know whether the technology we are reaching for
          is the right fit. we research the domain, study existing solutions,
          and identify where the real gaps are.
        </p>
        <p>
          for sigloop, this meant understanding why existing wallet
          infrastructure failed AI agents. for veridis, it meant mapping the
          entire supply chain verification landscape and identifying where
          cryptographic proof could replace blind{' '}
          <strong className="font-semibold text-neutral-950">trust</strong>.
        </p>
        <p>
          once we understand the landscape, we define the technical{' '}
          <strong className="font-semibold text-neutral-950">
            architecture
          </strong>{' '}
          and scope a first version that proves the core thesis — nothing more,
          nothing less.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>domain research</TagListItem>
        <TagListItem>competitive analysis</TagListItem>
        <TagListItem>technical feasibility</TagListItem>
        <TagListItem>architecture design</TagListItem>
        <TagListItem>scope definition</TagListItem>
        <TagListItem>proof of concept</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          we build iteratively, shipping working increments that can be tested
          against reality. every smart contract is audited before deployment.
          every API is designed for the consumers that will actually use it.
          every interface is built to be understood without a manual.
        </p>
        <p>
          we work in the open whenever possible — our projects are open source
          by default. this keeps us honest and forces us to write code that
          others can read, review, and contribute to.
        </p>
        <p>
          communication is direct and frequent. we don't hide behind project
          management tools or status reports. if something is blocked, you
          hear about it the same day. if a better approach emerges mid-build,
          we discuss it immediately.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Cătălin Tișcă', role: 'founder of inth3loop' }}
        className="mt-12"
      >
        the best products are built by people who use what they ship. every
        tool we build is something we would stake our own work on.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          delivery is not the end — it is where the product meets{' '}
          <strong className="font-semibold text-neutral-950">reality</strong>.
          we deploy to production with monitoring, documentation, and a clear
          plan for what comes next.
        </p>
        <p>
          for on-chain systems, this means verifying contracts on block
          explorers, publishing SDK documentation, and ensuring that every{' '}
          <strong className="font-semibold text-neutral-950">
            integration path
          </strong>{' '}
          works as expected. for AI pipelines, it means validating accuracy
          against real-world data and setting up feedback loops.
        </p>
        <p>
          we write whitepapers and technical documentation that explain not
          just how the system works, but{' '}
          <strong className="font-semibold text-neutral-950">why</strong> it
          was built this way. the goal is that anyone — a developer, a
          regulator, a user — can understand and verify the system
          independently.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="testing & auditing">
          smart contracts are tested exhaustively and audited before mainnet
          deployment. APIs are load-tested. every critical path has automated
          coverage.
        </ListItem>
        <ListItem title="documentation">
          whitepapers, SDK references, integration guides — we document
          everything so the product can stand on its own without us in the
          room.
        </ListItem>
        <ListItem title="open source release">
          code is published on GitHub with clear READMEs, contribution
          guidelines, and issue templates. we build in public because it
          makes everything better.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="our values"
        title="technology with integrity"
      >
        <p>
          we build at the edge of what is possible, but we do it with
          principles that keep us grounded. these values shape every
          decision we make.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="authenticity">
            we don't build things to look impressive on a slide deck. every
            project exists because the problem is real, the technology is
            ready, and the solution is genuinely useful.
          </GridListItem>
          <GridListItem title="quality">
            we would rather ship one excellent product than five mediocre
            ones. quality is not a phase — it is embedded in every commit,
            every review, every deployment.
          </GridListItem>
          <GridListItem title="transparency">
            open source by default. whitepapers that explain the reasoning.
            documentation that hides nothing. if it cannot withstand
            scrutiny, it should not ship.
          </GridListItem>
          <GridListItem title="pragmatism">
            we use the right tool for the job, not the trendiest one.
            blockchain when immutability matters. AI when pattern
            recognition matters. plain code when simplicity matters.
          </GridListItem>
          <GridListItem title="ownership">
            we build products we would use ourselves. that means caring about
            the details that only show up after the demo is over and real
            users arrive.
          </GridListItem>
          <GridListItem title="ambition">
            the projects worth building are the ones that change how things
            work. we aim for infrastructure-level impact — systems that
            other products build on top of.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'our process',
  description:
    'we believe in building iteratively, shipping in the open, and letting real-world feedback shape the product.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="our process" title="how we build">
        <p>
          we believe in building iteratively, shipping in the open, and
          letting real-world feedback shape the product. every project
          follows the same core cycle: understand the problem deeply,
          build the simplest thing that proves the thesis, then refine
          until it is production-grade.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
