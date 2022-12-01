import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className="layout">
			<header>
				<Link href="/">
					<a>
						<h1>
							<span>Just a</span>
							<span>Blog</span>
						</h1>
						<h2>Your recipes</h2>
					</a>
				</Link>
			</header>

			<div className="page-content">{children}</div>

			<footer>
				<p>Copyright 2022 Default Blog</p>
			</footer>
		</div>
	);
}
