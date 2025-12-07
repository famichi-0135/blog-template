const Footer = () => {
  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
