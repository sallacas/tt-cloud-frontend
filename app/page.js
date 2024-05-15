import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-gray-200 flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-12">Proyecto Final</h1>
        <nav className="flex justify-center">
          <ul className="flex space-x-4 p-2">
            <li>
              <Link href="/login">
                <span className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-6 rounded">
                  Iniciar Sesión
                </span>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <span className="bg-black hover:bg-gray-900 text-white font-bold py-3 px-5 rounded">
                  Registrarse
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
