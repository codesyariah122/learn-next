import RootLayout from 'layouts/RootLayout'
import { Hero, ListCard } from '@/components/index'

export default function Home() {
  return (
    <RootLayout>
        <Hero/>
        <ListCard/>
    </RootLayout>
  )
}
