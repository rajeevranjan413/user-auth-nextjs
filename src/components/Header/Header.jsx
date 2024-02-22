import Link from "next/link";
const Header = () => {
    return (
      <header className="bg-blue-500 py-4 px-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-lg font-semibold">
            Your Logo
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              {/* <Link
                href="/profile"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Profile
              </Link> */}
            </li>
            <li>
              <Link
                href="/login"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Log In
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    
    );
  };
  
  export default Header;