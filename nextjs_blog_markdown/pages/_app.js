import Header from '../src/components/Header';
import Footer from "../src/components/Footer";

import '../src/styles/globals.css'


function MyApp({Component, pageProps}) {
    return (
        <>
            <Header/>
            <main className="container">
                <Component {...pageProps} />
            </main>
            <Footer/>
        </>

    )

}

export default MyApp
