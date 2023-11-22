import Image from 'next/image'
import styles from './page.module.css'
import ManuelSlider from "@/components/ManuelSlider";

export default function Home() {
  return (
    <main className={styles.main}>
    <ManuelSlider />
    </main>
  )
}
