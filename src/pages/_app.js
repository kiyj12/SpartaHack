import { useRouter } from 'next/router'
import styles from '@/styles/University_Page.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <Component key={router.asPath} {...pageProps} />
}
