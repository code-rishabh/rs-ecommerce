import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  badge?: string;
};

export function PageHero({ title, subtitle, imageUrl, badge }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-zinc-50 via-white to-zinc-50 pt-20 pb-6 sm:pt-22 sm:pb-8">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-red-100/20 to-transparent blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-100/20 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-center">
          <div className="space-y-3">
            {badge && (
              <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                {badge}
              </span>
            )}
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              {subtitle}
            </p>
          </div>
          {imageUrl && (
            <div className="relative hidden h-48 w-full overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-lg md:block">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
