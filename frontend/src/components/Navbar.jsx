import { Menu, Building2 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white">
            <Building2 size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Gharkul
            </h1>

            <p className="text-xs text-gray-500">
              Smart Society
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="transition hover:text-emerald-600">
            Home
          </a>

          <a href="#features" className="transition hover:text-emerald-600">
            Features
          </a>

          <Link to="/about">
  About
</Link>

<Link to="/contact">
  Contact
</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button
            asChild
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>

      </div>
    </header>
  );
}