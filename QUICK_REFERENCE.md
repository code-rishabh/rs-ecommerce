# 🎨 Quick Reference Guide - Design System

## 🎯 Common Patterns

### Product Cards
```tsx
<div className="group rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
  {/* Content */}
</div>
```

### Primary CTA Buttons
```tsx
<button className="rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-red-600/30 transition-all hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:scale-105">
  Button Text
</button>
```

### Secondary Buttons
```tsx
<button className="rounded-xl border-2 border-zinc-300 bg-white px-8 py-4 text-lg font-bold text-zinc-900 shadow-sm transition-all hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-md">
  Button Text
</button>
```

### Section Headers
```tsx
<div className="text-center mb-12">
  <h2 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl lg:text-6xl">
    Section Title
  </h2>
  <p className="mt-4 text-xl text-zinc-600">
    Section description text
  </p>
</div>
```

### Badge Components
```tsx
{/* Trust Badge */}
<span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700">
  <Icon className="h-4 w-4" />
  Badge Text
</span>

{/* Gradient Badge */}
<span className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
  Badge Text
</span>
```

### Hover Image Effects
```tsx
<div className="relative overflow-hidden rounded-xl">
  <Image 
    className="object-cover transition-transform duration-500 group-hover:scale-110"
    {/* ... other props */}
  />
  
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
    {/* Quick actions */}
  </div>
</div>
```

---

## 🎨 Color System

### Brand Colors
```css
Primary Red: #dc2626 (red-600)
Dark Red: #b91c1c (red-700)
Light Red: #ef4444 (red-500)
```

### Semantic Colors
```css
Success: #10b981 (emerald-500)
Warning: #f59e0b (amber-500)
Info: #3b82f6 (blue-500)
```

### Gradients
```tsx
// Primary Brand
bg-gradient-to-r from-red-600 to-red-700
bg-gradient-to-r from-red-600 via-red-500 to-orange-600

// Backgrounds
bg-gradient-to-br from-zinc-50 via-white to-zinc-50
bg-gradient-to-br from-red-50 via-white to-orange-50

// Success/Savings
bg-gradient-to-r from-emerald-600 to-emerald-500
```

---

## 📏 Typography Scale

### Headers
```tsx
Hero: text-5xl sm:text-6xl lg:text-7xl font-extrabold
H1: text-4xl sm:text-5xl lg:text-6xl font-extrabold
H2: text-3xl sm:text-4xl lg:text-5xl font-extrabold
H3: text-2xl sm:text-3xl font-bold
H4: text-xl sm:text-2xl font-bold
```

### Body Text
```tsx
Large: text-xl
Base: text-base (16px)
Small: text-sm (14px)
Tiny: text-xs (12px)
```

### Font Weights
```tsx
Normal: font-normal (400)
Medium: font-medium (500)
Semibold: font-semibold (600)
Bold: font-bold (700)
Extrabold: font-extrabold (800)
Black: font-black (900)
```

---

## 🎭 Shadow System

```tsx
Extra Small: shadow-xs
Small: shadow-sm
Medium: shadow-md
Large: shadow-lg
Extra Large: shadow-xl
2X Large: shadow-2xl

// Colored Shadows
shadow-red-600/30  // 30% opacity red shadow
shadow-red-600/50  // 50% opacity red shadow
```

---

## 🔄 Animation Utilities

### Transitions
```tsx
transition-all duration-300  // Standard
transition-all duration-500  // Slower
transition-transform  // Only transform
transition-opacity  // Only opacity
```

### Transform Effects
```tsx
hover:scale-105  // Slight grow
hover:scale-110  // More grow
hover:-translate-y-2  // Lift up
hover:translate-x-2  // Move right
```

### Custom Animations (from globals.css)
```tsx
animate-scale-in  // Scale + fade in
animate-slide-up  // Slide up + fade
animate-fade-in  // Just fade in
animate-pulse-subtle  // Gentle pulse
```

---

## 📐 Spacing System

### Padding/Margin
```tsx
Small: p-4 (16px)
Medium: p-6 (24px)
Large: p-8 (32px)
Extra Large: p-12 (48px)
```

### Section Spacing
```tsx
// Use this utility class for consistent spacing
className="section-spacing"  // py-16 on mobile, py-24 on desktop
```

### Gap (Flexbox/Grid)
```tsx
Small: gap-2 (8px)
Medium: gap-4 (16px)
Large: gap-6 (24px)
Extra Large: gap-8 (32px)
```

---

## 🎨 Border Radius

```tsx
Small: rounded-lg (8px)
Medium: rounded-xl (12px)
Large: rounded-2xl (16px)
Pill: rounded-full
```

---

## 🎯 Responsive Breakpoints

```tsx
sm: 640px  // Small devices
md: 768px  // Medium devices
lg: 1024px // Large devices
xl: 1280px // Extra large
2xl: 1536px // 2X large

// Usage example:
text-base sm:text-lg lg:text-xl
```

---

## 💫 Icons

### Common Icon Sizes
```tsx
Small: h-4 w-4
Medium: h-5 w-5
Large: h-6 w-6
Extra Large: h-8 w-8
```

### Icon + Text Pattern
```tsx
<div className="flex items-center gap-2">
  <Icon className="h-5 w-5 text-blue-600" />
  <span className="font-semibold">Text</span>
</div>
```

---

## 🎪 Loading States

### Spinner
```tsx
<svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
</svg>
```

### Pulse Animation
```tsx
<span className="flex h-2 w-2 relative">
  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
```

---

## 🎨 Backdrop Effects

### Glass Morphism
```tsx
className="backdrop-blur-md bg-white/10 border border-white/20"
```

### Blur Backgrounds
```tsx
className="backdrop-blur-lg bg-white/95"
```

---

## 📦 Container Patterns

### Standard Container
```tsx
<div className="container-custom">
  {/* max-w-7xl with responsive padding */}
</div>
```

### Full Width Section
```tsx
<section className="border-b border-zinc-200 bg-white section-spacing">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>
```

---

## 🎯 Common SVG Icons

### Checkmark
```tsx
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
</svg>
```

### Arrow Right
```tsx
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>
```

### Star (Rating)
```tsx
<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
```

---

## 🎨 Pricing Display Pattern

```tsx
<div className="mb-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 p-4">
  <div className="flex items-baseline gap-3">
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">
        Deal Price
      </p>
      <p className="text-3xl font-extrabold text-emerald-600">
        $999
      </p>
    </div>
    <div className="flex-1 text-right">
      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 mb-1">
        Was
      </p>
      <p className="text-xl font-bold text-zinc-400 line-through">
        $1,299
      </p>
    </div>
  </div>
  
  <div className="mt-3 pt-3 border-t border-emerald-200 flex items-center justify-between">
    <span className="text-xs font-semibold text-zinc-600">You Save:</span>
    <span className="text-base font-extrabold text-emerald-700">$300</span>
  </div>
</div>
```

---

## 🔥 Pro Tips

1. **Always use transition-all** for smooth animations
2. **Group hover states** with `group` and `group-hover:`
3. **Use `duration-300`** as standard (faster for small UI changes)
4. **Combine transforms** for richer interactions: `hover:scale-105 hover:-translate-y-2`
5. **Add shadows on hover** to increase depth perception
6. **Use gradients sparingly** for primary CTAs and special elements
7. **Animate opacity and transform** (not width/height) for performance
8. **Test hover states** on all interactive elements
9. **Maintain 2:1 size ratio** for mobile vs desktop typography
10. **Use `font-extrabold` or `font-black`** for major headings

---

**Quick Access:**
- Full Documentation: `DESIGN_IMPROVEMENTS.md`
- Design Tokens: `src/app/globals.css`
- Example Components: `src/components/`

