import { useRouter } from 'next/router'
import "@/styles/Analysis_Page.css";
import "@/styles/UnivInfo.css";
import "@/styles/ComparingUniv.css";
import '@/styles/University_Page.css'
import '@/styles/UnivMain.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <Component key={router.asPath} {...pageProps} />
}
