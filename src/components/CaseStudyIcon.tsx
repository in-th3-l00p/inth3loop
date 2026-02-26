import { Wallet, ShieldCheck, type LucideProps } from 'lucide-react'

const icons: Record<string, React.ComponentType<LucideProps>> = {
  wallet: Wallet,
  'shield-check': ShieldCheck,
}

export function CaseStudyIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  let Icon = icons[name]
  if (!Icon) return null
  return <Icon className={className} />
}
