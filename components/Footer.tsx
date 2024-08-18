import { cn } from "@/lib/utils";
import Link from "next/link";

type CustomLinkProps = {
  href: string;
  title: string;
  className?: string;
};

const footerLinks = [
  {
    title: "Shop",
    url: "/shop",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "Privacy Policy",
    url: "#",
  },
  {
    title: "Licensing",
    url: "#",
  },
  {
    title: "Contact",
    url: "#",
  },
];

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
    <footer className="m-4 rounded-lg bg-white dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <CustomLink href="/" title="Shoe Store" />. All Rights
          Reserved.
        </span>

        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          {footerLinks.map(({ url, title }, index) => (
            <CustomLink
              key={index}
              href={url}
              title={title}
              className="me-4 md:me-6"
            />
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;