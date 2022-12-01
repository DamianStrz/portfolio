import Link from "next/link";


const ContactPage = () => {
    return (
        <>
            <h2>
                Dane adresowe i kontakt
            </h2>
            <Link href='/'>
                <a className="btn btn-back">Back</a>
            </Link>
        </>

    )
}

export default ContactPage;
