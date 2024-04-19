import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Landing template for startups"
        content="📢 Attention #AlphaltCommunity! We're thrilled to announce an exclusive airdrop for our early contributors. 🌟 Be part of our journey and secure your spot in the future of finance. Submit your email now to join the airdrop list! 🚀 #AlphaltAirdrop #CryptoInnovation #JoinUs"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
