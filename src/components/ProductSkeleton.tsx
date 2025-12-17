export function ProductSkeleton() {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white shadow-sm p-5 animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square w-full bg-zinc-200 rounded-xl mb-5"></div>
      
      {/* Brand & Rating */}
      <div className="flex items-center justify-between mb-3">
        <div className="h-6 w-16 bg-zinc-200 rounded-full"></div>
        <div className="h-4 w-20 bg-zinc-200 rounded"></div>
      </div>
      
      {/* Title */}
      <div className="space-y-2 mb-3">
        <div className="h-4 w-full bg-zinc-200 rounded"></div>
        <div className="h-4 w-3/4 bg-zinc-200 rounded"></div>
      </div>
      
      {/* Category */}
      <div className="h-3 w-24 bg-zinc-200 rounded mb-3"></div>
      
      {/* Price */}
      <div className="h-8 w-32 bg-zinc-200 rounded mb-3"></div>
      
      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-20 bg-zinc-200 rounded-md"></div>
        <div className="h-6 w-24 bg-zinc-200 rounded-md"></div>
      </div>
      
      {/* CTA */}
      <div className="h-12 w-full bg-zinc-200 rounded-xl"></div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}

