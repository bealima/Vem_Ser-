import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

function Layout ({children}){
  return(
    <div>
      <Head>
        <title>Título</title>
      </Head>
      <div>
        <Header/>
        {children}
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;