import { HeroCarousel } from "../components/HeroCarousel";
import { BrandStrip } from "../components/BrandStrip";
import { PromotionalBanners } from "../components/PromotionalBanners";
import { CategoryStrip } from "../components/CategoryStrip";
import { USPsSection } from "../components/USPsSection";
import { BrandShowcase } from "../components/BrandShowcase";
import { BundleBuilderPreview } from "../components/BundleBuilderPreview";
import { EnhancedProductGrid } from "../components/EnhancedProductGrid";
import { TodayDealsSection } from "../components/TodayDealsSection";
import { TrustSection } from "../components/TrustSection";
import { DeliveryEstimator } from "../components/DeliveryEstimator";
import { PriceComparisonStrip } from "../components/PriceComparisonStrip";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - First Impression & Primary CTA */}
      <HeroCarousel />
      
      {/* 1.5 Price Comparison Strip - E-commerce Credibility */}
      <PriceComparisonStrip />
      
      {/* 2. Featured Deals - Urgency & Scarcity (High Priority) */}
      <TodayDealsSection />
      
      {/* 4. Product Showcase - Main catalog (Most Important) */}
      <EnhancedProductGrid />
      
      {/* 5. Value Propositions - Quick wins & benefits */}
      <PromotionalBanners />
      
      {/* 6. Category Navigation - Help users find what they need */}
      <CategoryStrip />
      
      {/* 7. Core USPs - Why choose us */}
      <USPsSection />
      
      {/* 8. Brand Exploration - Visual showcase */}
      <BrandShowcase />
      
      {/* 9. Interactive Tool - Bundle Builder */}
      <BundleBuilderPreview />
      
      {/* 10. Social Proof & Trust - Stats & Partners */}
      <TrustSection />
      
      {/* 11. Utility Tool - Delivery Check */}
      <DeliveryEstimator />
    </>
  );
}
