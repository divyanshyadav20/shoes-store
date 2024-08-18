import { FOOTER_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

function CustomLink({ href, title, className }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors duration-300 hover:text-indigo-600",
        className,
      )}
    >
      {title}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="my-4 border-t bg-white pt-4 dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024 <CustomLink href="/" title="Shoe Store" />. All Rights
          Reserved.
        </span>

        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {FOOTER_LINKS.map(({ name, href }, index) => (
            <CustomLink
              key={index}
              href={href}
              title={name}
              className="me-4 md:me-6"
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
