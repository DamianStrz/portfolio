import Link from 'next/link';


const Navigation = () => {
    return (
        <nav>

            <Link href='/about'>
                <a className="nav-link">O firmie</a>
            </Link>

            <Link href='/offer'>
                <a href="" className="nav-link">Oferta</a>
            </Link>

            <Link href='/prices'>
                <a href="" className="nav-link">Cennik</a>
            </Link>

            <Link href='/contact'>
                <a href="" className="nav-link">Kontakt</a>
            </Link>
            
        </nav>
    )
}

export default Navigation;