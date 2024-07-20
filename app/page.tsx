import Link from 'next/link'
import ButtonComponent from './components/ButtonComponent'
import { useState } from 'react'

export default function Page() {
  const [num, setNum] = useState(null)
  num
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      <ButtonComponent category={"danger"} text='test' />
    </div>
  )
}