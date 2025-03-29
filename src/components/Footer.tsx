import Link from "next/link";

export default function Footer() {

    return (
        <footer className="fixed bottom-0 w-full">
          
            <nav className="p-4 border-t bg-white dark:bg-black border-gray-200 dark:border-gray-700">
              <ul className="flex justify-between">
                <li><Link href="/">X</Link></li>
                <li><Link href="#">X</Link></li>
                <li><Link href="#">X</Link></li>
              </ul>
            </nav>
          </footer>
    )
}