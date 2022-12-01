import Link from "next/link";

const AboutPage = () => {
    return (
        <>
            <h2>
                O firmie
            </h2>
            <Link href='/'>
                <a className="btn btn-back">Back</a>
            </Link>
        </>

    )
}

export default AboutPage;
