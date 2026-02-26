export function GET() {
  const content = `# inth3loop.org — full reference

> a software organization building at the intersection of blockchain, AI, and real world use cases.

## organization

- **name:** inth3loop.org
- **founded by:** Cătălin Tișcă (https://tiscacatalin.com)
- **focus:** latest innovations in tech, quality-driven, authentic artistic products
- **identity:** a software organization at the intersection of technology and art, committed to authenticity and craftsmanship

## services

- **software engineering:** robust, scalable software from web applications to smart contracts, using modern frameworks and battle-tested architectures.
- **blockchain & web3:** on-chain systems including account abstraction wallets, zero knowledge proof pipelines, smart contract infrastructure, and protocol integrations.
- **AI & machine learning:** research and prototyping with emerging AI technologies, from document ingestion pipelines to agent frameworks, shipped as production-grade products.
- **product strategy:** helping teams navigate complex technical decisions, from architecture design to technology selection, with a focus on long-term quality and real-world utility.

## technologies

EVM, ERC-4337, zero knowledge proofs, AI / ML, account abstraction, smart contracts, on-chain verification, agent frameworks, cryptographic proofs, digital product passports, decentralized identity, supply chain verification.

## projects

### sigloop

- **url:** https://sigloop.tiscacatalin.com
- **case study:** https://inth3loop.org/work/sigloop
- **tagline:** wallets for agents that pay
- **tech:** AI agents, web3, ERC-4337
- **date:** 2026

sigloop is the payment layer the agentic web needs, providing AI agents with smart contract wallets featuring safety limitations, session keys, scoped permissions, and native HTTP 402 payment automation.

built on ERC-4337 account abstraction, sigloop lets developers give their agents secure, budget-controlled wallets without managing EntryPoints, UserOps, or bundler infrastructure.

key capabilities:
- smart contract development
- ERC-4337 integration
- SDK design
- security architecture
- native HTTP 402 payment automation
- per-agent scoped wallet permissions
- instant key revocation

### veridis

- **url:** https://veridis.tiscacatalin.com
- **case study:** https://inth3loop.org/work/veridis
- **tagline:** cryptographic proof for real world product claims
- **tech:** zero knowledge proofs, AI, blockchain
- **date:** 2026

veridis is the cryptographic verification layer for real world product claims, using zero knowledge proofs, AI-powered document ingestion, and on-chain proof anchoring to replace trust with verifiable evidence.

every product label claims something: organic, locally sourced, certified, conflict-free. veridis turns those unsubstantiated claims into cryptographically provable facts.

key capabilities:
- zero knowledge proof systems
- AI document ingestion
- on-chain proof anchoring
- universal verification API
- privacy-preserving verification (suppliers prove claims without revealing sensitive data)
- supplier-first design (verify once, trusted everywhere)

target verticals: HORECA, textiles & fashion, and any regulated product category under the EU ESPR schedule (textiles by 2027, metals by 2028, electronics by 2029).

## culture

- quality is not an act, it is a habit
- authentic craftsmanship and cutting-edge technology are not opposites, they are the same thing
- building things that matter, with purpose and craft

## links

- website: https://inth3loop.org
- github: https://github.com/inth3loop
- x / twitter: https://x.com/inth3loop
- founder: https://tiscacatalin.com

## all pages

- [home](https://inth3loop.org/) — main landing page with overview, technologies, projects, and services
- [about](https://inth3loop.org/about) — organization story, culture, and team
- [work](https://inth3loop.org/work) — portfolio of projects and case studies
- [sigloop case study](https://inth3loop.org/work/sigloop) — detailed case study for sigloop
- [veridis case study](https://inth3loop.org/work/veridis) — detailed case study for veridis
- [contact](https://inth3loop.org/contact) — get in touch
`

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
