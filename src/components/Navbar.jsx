"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link href="/">
          <Image src="/logo.png" width={200} height={200} alt="Logo" />
        </Link>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="/" className="text-dark text-lg">
            Inicio
          </Link>

          {/* --- TELAS CONFECCIÓN --- */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-dark text-lg transition">
              Telas Confección
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div
              className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-56 opacity-0 invisible translate-y-2 
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                         transition-all duration-300 ease-out"
            >
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Pelo Corto
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Pelo Medio
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Pelo Largo
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Ovejero
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Microovejero
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Ovejero Cuadros
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Peluche Pelo Jacquard
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Relleno Siliconado
              </Link>
            </div>
          </div>

          {/* --- FELPAS INDUSTRIALES --- */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-dark text-lg transition">
              Felpas Industriales
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div
              className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-2 w-56 opacity-0 invisible translate-y-2 
                         group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                         transition-all duration-300 ease-out"
            >
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Industrial Liviana
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Industrial Intermedia
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Industrial Profesional
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Industrial Epoxico
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Industrial Ovejera
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Industrial Polilana
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">
                Felpa Antigoteo
              </Link>
            </div>
          </div>

          {/* RESTO DE LINKS */}
          <Link href="/contacto" className="text-dark text-lg">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-dark text-lg">
            Contacto
          </Link>
          <Link href="/contacto" className="text-dark text-lg">
            Tienda
          </Link>

          <div>
            <ShoppingCart className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}
