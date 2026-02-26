export function GET() {
  const content = `# inth3loop.org

> a software organization building at the intersection of blockchain, AI, and real world use cases.

## about

inth3loop.org is a software organization founded by Cătălin Tișcă, focused on the latest innovations in tech, quality-driven, authentic artistic products. we build at the edge of innovation, turning emerging technology into products that solve real problems.

## projects

- [sigloop](https://inth3loop.org/work/sigloop): smart contract wallets for AI agents with safety limitations, session keys, and HTTP 402 payment automation. built on ERC-4337.
- [veridis](https://inth3loop.org/work/veridis): cryptographic verification layer for real world product claims using zero knowledge proofs, AI document ingestion, and on-chain proof anchoring.

## links

- website: https://inth3loop.org
- github: https://github.com/inth3loop
- x / twitter: https://x.com/inth3loop
- founder: https://tiscacatalin.com

## pages

- [home](https://inth3loop.org/)
- [about](https://inth3loop.org/about)
- [work](https://inth3loop.org/work)
- [contact](https://inth3loop.org/contact)

## extended info

For more detailed information, see [llms-full.txt](https://inth3loop.org/llms-full.txt).
`

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
