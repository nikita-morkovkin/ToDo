type IconProps = {
  name: 'check' | 'plus' | 'trash' | 'sun' | 'sparkle' | 'checkCircle'
  size?: number
}

const Icon = ({ name, size = 20 }: IconProps) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  if (name === 'check') {
    return <svg {...commonProps}><path d="m5 12 4 4L19 6" /></svg>
  }

  if (name === 'plus') {
    return <svg {...commonProps}><path d="M12 5v14M5 12h14" /></svg>
  }

  if (name === 'trash') {
    return <svg {...commonProps}><path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" /></svg>
  }

  if (name === 'sun') {
    return <svg {...commonProps}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
  }

  if (name === 'sparkle') {
    return <svg {...commonProps}><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" /></svg>
  }

  return <svg {...commonProps}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></svg>
}

export default Icon