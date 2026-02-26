import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'inth3loop.org'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          fontFamily: 'sans-serif',
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 32 32"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <path
            d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2Zm0 4c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6Zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"
            fill="white"
          />
        </svg>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            letterSpacing: '-0.02em',
          }}
        >
          inth3loop.org
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#a3a3a3',
            marginTop: 16,
            letterSpacing: '0.01em',
          }}
        >
          technology with purpose, built with craft
        </div>
      </div>
    ),
    { ...size },
  )
}
