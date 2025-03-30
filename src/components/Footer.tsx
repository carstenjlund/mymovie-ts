import Link from "next/link";
import { RiMovie2Line } from "react-icons/ri";
import { RiTicketLine } from "react-icons/ri";
import { RiBookmarkLine } from "react-icons/ri";

export default function Footer() {

    return (
        <footer className="fixed bottom-0 w-full">
          
            <nav className="p-4 border-t bg-white dark:bg-black border-gray-200 dark:border-gray-700">
              <ul className="flex justify-between">
                <li><Link href="/"><RiMovie2Line size={24} className="mx-2" /></Link></li>
                <li><Link href="#"><RiTicketLine size={24} className="mx-2" /></Link></li>
                <li><Link href="#"><RiBookmarkLine size={24} className="mx-2" /></Link></li>
              </ul>
            </nav>
          </footer>
    )
}