import Link from 'next/link';
import Navigation from "./Navigation";

export default function Header() {
    return (
        <header>
            <div className="container head">
                <Link href='/' passHref>
                    <a>
                        <h2>Logo Link</h2>
                    </a>
                </Link>
                <Navigation/>
            </div>
        </header>

    )
};