type Props = {
  businessName: string
}

export function Footer({ businessName }: Props) {
  return (
    <footer className="px-6 py-8 text-sm opacity-60">
      {businessName} · Montenegro
    </footer>
  )
}