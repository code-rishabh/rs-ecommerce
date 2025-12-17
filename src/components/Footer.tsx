export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="space-y-1">
          <p className="font-medium text-zinc-700">
            © {new Date().getFullYear()} Red Stone USA Inc. All rights
            reserved.
          </p>
          <p>
            Meta Premier Partner • Authorized Distributor • Authorized Reseller
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#terms" className="hover:text-zinc-800">
            Terms &amp; Conditions
          </a>
          <a href="#policies" className="hover:text-zinc-800">
            Shipping &amp; Returns
          </a>
          <a href="#security" className="hover:text-zinc-800">
            Security &amp; Compliance
          </a>
        </div>
      </div>
    </footer>
  );
}



