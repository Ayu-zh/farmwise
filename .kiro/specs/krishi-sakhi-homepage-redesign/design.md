# Design Document

## Overview

This design document outlines the visual and structural redesign of the homepage for the "Krishi Sakhi" platform. The redesign transforms the existing "FarmWise" branding to "Krishi Sakhi" while maintaining the current React component architecture and functionality. The design incorporates Kerala government website aesthetics, local agricultural context, and farmer-focused messaging while preserving all existing navigation and features.

## Architecture

### Component Structure
The existing homepage architecture will be maintained with updates to content and styling:

```
LandingPage
├── LandingNavbar (updated branding)
├── HeroSection (new content & Kerala theme)
├── FeaturesSection (updated to highlight existing platform capabilities)
├── AboutSection (Kerala farming context)
├── TestimonialsSection (farmer-focused testimonials)
├── CTASection (clear navigation to existing features)
└── FooterSection (updated branding)
```

### Design System Updates

#### Color Palette (Kerala Government Inspired)
- **Primary Blue**: `#1e40af` (Kerala government blue)
- **Secondary Green**: `#059669` (agricultural green)
- **Accent Gold**: `#d97706` (Kerala traditional gold)
- **Background**: `#f8fafc` (light neutral)
- **Text Primary**: `#1f2937` (dark gray)
- **Text Secondary**: `#6b7280` (medium gray)

#### Typography
- **Primary Font**: Inter (maintained for readability)
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)
- **Malayalam Text**: Noto Sans Malayalam (for local language elements)

## Components and Interfaces

### 1. Updated Navbar Component
**Purpose**: Rebrand to "Krishi Sakhi" and maintain existing navigation

**Design Changes**:
- Replace "FarmWise" with "Krishi Sakhi" 
- Update logo icon to rice/paddy symbol (more Kerala-appropriate)
- Maintain existing navigation links: Home, Features, About, Contact
- Keep existing CTA buttons: Chat, Scheme, Apply for Subsidy
- Apply Kerala government color scheme

**Interface**:
```typescript
interface NavbarProps {
  // Existing props maintained
}
```

### 2. Hero Section Redesign
**Purpose**: Introduce "Krishi Sakhi" as AI-powered agricultural advisor for Kerala farmers

**Design Changes**:
- **Headline**: "Empower your farming with Krishi Sakhi - Your AI Agricultural Companion"
- **Subheading**: "Personalized scheme recommendations, AI-powered guidance, and multilingual support for Kerala's farmers"
- **Background**: Kerala landscape imagery (rice fields, coconut palms)
- **CTA Buttons**: 
  - Primary: "Get Personalized Schemes" (links to /subsidy)
  - Secondary: "Chat with AI Assistant" (links to /chat)
- **Stats**: Update to reflect agricultural focus
  - "500+ Farmers Assisted"
  - "50+ Government Schemes"
  - "Malayalam Support"

**Visual Elements**:
- Kerala agricultural imagery
- Floating cards showing scheme benefits
- Government-style visual indicators

### 3. Features Section Update
**Purpose**: Highlight existing platform capabilities with Kerala farming context

**Updated Features**:
1. **AI-Powered Scheme Matching**
   - Icon: Target/Bullseye
   - Description: "Get personalized government scheme recommendations based on your farm profile, location, and crop choices"

2. **Conversational AI Interface** 
   - Icon: MessageSquare
   - Description: "Chat with our AI assistant in Malayalam or English to get instant answers about schemes and farming practices"

3. **Document Analysis & Summaries**
   - Icon: FileText
   - Description: "Upload and analyze complex government scheme documents with AI-powered summaries in simple language"

4. **Multilingual Support**
   - Icon: Globe
   - Description: "Access all features in Malayalam and English, making agricultural guidance accessible to all farmers"

5. **Personalized Recommendations**
   - Icon: User
   - Description: "Receive tailored advice based on your land size, crop type, location, and farming practices"

6. **Government Scheme Database**
   - Icon: Database
   - Description: "Access comprehensive information about Kerala and central government agricultural schemes and subsidies"

### 4. About Section (Kerala Context)
**Purpose**: Explain the platform's relevance to Kerala's agricultural challenges

**Content Structure**:
- **Problem Statement**: Kerala's smallholder farmers face challenges with generic agricultural advice and complex scheme documentation
- **Solution**: AI-powered platform that understands local context and simplifies government scheme access
- **Local Relevance**: Emphasis on Kerala's unique crops (rice, coconut, spices, rubber) and farming practices
- **Government Support**: Highlight platform's alignment with Kerala's digital governance initiatives

### 5. Testimonials Section (Farmer-Focused)
**Purpose**: Show platform value through farmer success stories

**Testimonial Themes**:
- Successful scheme applications
- AI chat assistance effectiveness
- Document analysis helping understand complex schemes
- Multilingual support accessibility
- Time saved in finding relevant schemes

**Sample Testimonials**:
- Rice farmer from Kuttanad who found relevant water management schemes
- Spice farmer from Idukki who accessed organic farming subsidies
- Coconut farmer who used AI chat for pest management guidance

### 6. CTA Section Update
**Purpose**: Drive users to existing platform features

**Call-to-Actions**:
- **Primary CTA**: "Start Your Scheme Journey" → /subsidy
- **Secondary CTA**: "Chat with AI Assistant" → /chat  
- **Tertiary CTA**: "Analyze Scheme Documents" → /scheme

## Data Models

### Updated Content Models
```typescript
interface HeroContent {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA: {
    text: string;
    link: string;
  };
  stats: Array<{
    value: string;
    label: string;
  }>;
}

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface TestimonialItem {
  name: string;
  location: string;
  cropType: string;
  testimonial: string;
  avatar?: string;
}
```

## Error Handling

### Content Loading
- Graceful fallbacks for missing images
- Default content if dynamic content fails to load
- Proper error boundaries for component failures

### Responsive Design
- Mobile-first approach maintained
- Breakpoint handling for Kerala government design elements
- Touch-friendly interactions on mobile devices

## Testing Strategy

### Visual Regression Testing
- Screenshot comparisons for design consistency
- Cross-browser compatibility testing
- Mobile responsiveness validation

### Content Testing
- Malayalam text rendering verification
- Link functionality to existing routes (/subsidy, /chat, /scheme)
- CTA button effectiveness

### Accessibility Testing
- Color contrast compliance (WCAG 2.1 AA)
- Screen reader compatibility
- Keyboard navigation support
- Malayalam language support testing

### Performance Testing
- Image optimization for Kerala agricultural imagery
- Font loading optimization for Malayalam fonts
- Core Web Vitals monitoring

## Implementation Approach

### Phase 1: Branding Update
1. Update navbar with "Krishi Sakhi" branding
2. Replace logo and color scheme
3. Update page title and meta tags

### Phase 2: Content Redesign  
1. Redesign hero section with Kerala context
2. Update features section with existing capabilities
3. Rewrite about section for local relevance

### Phase 3: Visual Enhancement
1. Implement Kerala government-inspired styling
2. Add appropriate agricultural imagery
3. Update testimonials with farmer focus

### Phase 4: Testing & Optimization
1. Cross-browser testing
2. Mobile responsiveness verification
3. Performance optimization
4. Accessibility compliance check

## Design Specifications

### Layout Grid
- Container max-width: 1200px
- Grid system: 12-column responsive grid
- Spacing scale: 4px base unit (4, 8, 16, 24, 32, 48, 64px)

### Component Spacing
- Section padding: 64px vertical, 16px horizontal (mobile), 24px horizontal (desktop)
- Card padding: 24px
- Button padding: 12px 24px (medium), 16px 32px (large)

### Animation Guidelines
- Fade-in animations for content sections
- Hover transitions: 200ms ease-in-out
- Loading states for dynamic content
- Smooth scrolling for anchor links

### Image Requirements
- Hero image: 1200x600px (Kerala agricultural landscape)
- Feature icons: 24x24px SVG
- Testimonial avatars: 64x64px (optional)
- Background patterns: Subtle agricultural motifs

This design maintains the existing technical architecture while transforming the visual presentation and content to align with the "Krishi Sakhi" brand and Kerala agricultural context.