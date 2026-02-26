import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        find us
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        we work remote-first, but we are always reachable. here is where
        you can find us.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'contact us',
  description:
    'reach out to us. we are always happy to hear from you.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="contact us" title="let's talk">
        <p>
          whether you have a question, want to collaborate, or just want
          to say hello. we are always happy to hear from you.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ContactDetails />
      </Container>
    </RootLayout>
  )
}
