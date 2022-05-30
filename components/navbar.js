import Link from "next/link";

const NavBar= () => {
    return (
      <div >
          <nav>
                <div className="logo">
                    <div>
                        <h2>Logo</h2>
                    </div>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>  
          </nav>

      </div>
    )
}

export default NavBar;