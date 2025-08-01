# 🏠 Slide Editor Foundation - Professional Presentation Builder

> **A React-based presentation slide editor with real estate template population, drag-and-drop functionality, and PDF export capabilities.**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-orange.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4-build.svg)](https://vitejs.dev/)

## 📋 Table of Contents

- [🎉 Welcome](#-welcome)
- [🎬 Demo Video](#-demo-video)
- [🚀 Live Demo](#-live-demo)
- [⚙️ Setup & Installation](#️-setup--installation)
- [✨ Features](#-features)
- [🏗️ Architecture & Code Quality](#️-architecture--code-quality)
- [🔧 Template Population via API](#-template-population-via-api)
- [🚀 Adding Future Features](#-adding-future-features)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎉 Welcome

Welcome to **Slide Editor Foundation** - a modern, professional presentation builder designed specifically for real estate professionals. This React-based application provides a Google Slides-like experience with powerful template population capabilities, making it perfect for creating stunning property presentations.

### 🎯 Key Highlights

- **🎨 Professional Templates**: Pre-built real estate templates with dynamic content population
- **🖱️ Drag & Drop Interface**: Intuitive slide management and element positioning
- **📊 Real-time Preview**: See changes instantly with live preview functionality
- **📄 PDF Export**: Export presentations as high-quality PDFs
- **🔧 Extensible Architecture**: Built for easy feature additions and customization

---

## 🎬 Demo Video

> _Coming Soon: Professional demo video showcasing all features_

### 🎥 What You'll See

- Template selection and population
- Drag-and-drop slide management
- Real-time editing capabilities
- PDF export functionality
- Responsive design across devices

---

## 🚀 Live Demo

> **Deployed Application**: [Slide Editor Foundation](https://your-deployment-link.com)

### 🌐 Access the Application

- **Production Build**: Optimized for performance
- **Mobile Responsive**: Works on all devices
- **Real-time Updates**: Latest features always available

---

## ⚙️ Setup & Installation

### 📋 Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** (v8.0.0 or higher)
- **Git** (for cloning the repository)

### 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-username/slide-editor-foundation.git

# 2. Navigate to the project directory
cd slide-editor-foundation

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open your browser
# Navigate to: http://localhost:5173
```

### 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run type-check

# Lint code
npm run lint
```

### 📁 Project Structure

```
src/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Sidebar, etc.)
│   ├── slides/         # Slide-related components
│   ├── elements/       # Canvas elements (Text, Image, Shape)
│   ├── modals/         # Modal components
│   ├── panels/         # Tool panels
│   └── common/         # Shared components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── data/               # Mock data and templates
└── styles/             # Global styles
```

---

## ✨ Features

### 🎨 **Core Editor Features**

#### **Slides Management**

- ✅ **Add/Delete/Duplicate Slides**: Full CRUD operations for slide management
- ✅ **Drag & Drop Reordering**: Intuitive slide reordering with visual feedback
- ✅ **Slide Selection**: Highlight and manage selected slides
- ✅ **Auto-save**: Automatic presentation saving to local storage

#### **Canvas Editor**

- ✅ **Text Elements**: Rich text editing with formatting options
- ✅ **Image Elements**: Upload and display images with resize capabilities
- ✅ **Shape Elements**: Multiple shape types (rectangle, circle, triangle, diamond)
- ✅ **Element Positioning**: Drag, resize, and position elements precisely
- ✅ **Z-Index Management**: Bring to front/send to back functionality
- ✅ **Grid Snapping**: Professional alignment with grid overlay

#### **Template System**

- ✅ **Pre-built Templates**: Professional real estate templates
- ✅ **Template Population**: Dynamic content replacement via API
- ✅ **Custom Templates**: Save and reuse custom slide designs
- ✅ **Template Categories**: Organized template management

#### **Export & Preview**

- ✅ **Full-screen Preview**: ESC to exit preview mode
- ✅ **PDF Export**: High-quality PDF generation
- ✅ **Image Export**: Individual slide image export
- ✅ **Print Support**: Print-ready output

### 🎯 **Real Estate Specific Features**

#### **Template Population**

- ✅ **Dynamic Content**: Replace placeholders with real data
- ✅ **Image Population**: Automatic image loading from URLs
- ✅ **Text Replacement**: Property details, agent info, specifications
- ✅ **Nested Data Support**: Handle complex data structures

#### **Professional Templates**

- ✅ **Property Listing**: Complete property showcase template
- ✅ **Dual Image Layout**: Two-image comparison layouts
- ✅ **Interior & Exterior**: Property view templates
- ✅ **Customizable Elements**: All elements fully editable

### 🔧 **Technical Features**

#### **Performance & UX**

- ✅ **Responsive Design**: Works on desktop, tablet, and mobile
- ✅ **Keyboard Shortcuts**: Efficient editing workflow
- ✅ **Error Boundaries**: Graceful error handling
- ✅ **Loading States**: User feedback during operations
- ✅ **Toast Notifications**: Success/error feedback

#### **Code Quality**

- ✅ **TypeScript**: Full type safety throughout
- ✅ **ESLint**: Code quality enforcement
- ✅ **Prettier**: Consistent code formatting
- ✅ **Path Aliases**: Clean import organization
- ✅ **Barrel Exports**: Simplified component imports

---

## 🏗️ Architecture & Code Quality

### 🎯 **Clean Architecture Principles**

#### **Separation of Concerns**

```typescript
// ✅ Clean separation: UI, Logic, Data
// components/ - Pure UI components
// hooks/ - Business logic
// utils/ - Utility functions
// types/ - Type definitions
```

#### **Single Responsibility Principle**

```typescript
// ✅ Each component has one clear purpose
export const SlidesPanel = () => {
  // Only handles slide display and reordering
  return <div>...</div>;
};

export const Canvas = () => {
  // Only handles canvas editing
  return <div>...</div>;
};
```

### 📚 **Readable & Consistent Code**

#### **Consistent Naming Conventions**

```typescript
// ✅ Clear, descriptive names
const useSlideStore = () => {
  /* ... */
};
const exportToPDF = async () => {
  /* ... */
};
const populateTemplate = (slide, data) => {
  /* ... */
};
```

#### **Self-Documenting Code**

```typescript
// ✅ Code explains itself
const handleElementSelect = (elementId: string) => {
  setSelectedElement(elementId);
  setShowTextFormatPanel(elementId ? true : false);
};
```

### 🔄 **DRY (Don't Repeat Yourself)**

#### **Reusable Components**

```typescript
// ✅ Shared components reduce duplication
export const ErrorBoundary = ({ children, fallback }) => {
  // Used across all components for error handling
};

export const Toast = ({ message, type }) => {
  // Consistent notification system
};
```

#### **Utility Functions**

```typescript
// ✅ Centralized utilities
export const getElementDimensions = (type: ElementType) => {
  // Reused across multiple components
};

export const showToast = {
  success: (message: string) => {
    /* ... */
  },
  error: (message: string) => {
    /* ... */
  },
};
```

### 🧩 **Modular Components**

#### **Component Organization**

```typescript
// ✅ Logical grouping by feature
src/components/
├── layout/          # App structure
├── slides/          # Slide management
├── elements/        # Canvas elements
├── modals/          # Overlay components
├── panels/          # Tool interfaces
└── common/          # Shared components
```

#### **Barrel Exports**

```typescript
// ✅ Clean imports
export * from "./layout";
export * from "./slides";
export * from "./elements";
// Single import point for all components
```

### 📈 **Scalable Design**

#### **State Management**

```typescript
// ✅ Centralized state with clear interfaces
interface SlideStore {
  slides: Slide[];
  selectedSlide: string | null;
  selectedElement: string | null;
  // Clear, extensible state structure
}
```

#### **Type Safety**

```typescript
// ✅ Comprehensive type definitions
interface SlideElement {
  id: string;
  type: "text" | "image" | "shape";
  x: number;
  y: number;
  width: number;
  height: number;
  content?: string;
  style?: ElementStyle;
  zIndex?: number;
}
```

### 🚀 **Extensible Architecture**

#### **Plugin System Ready**

```typescript
// ✅ Easy to add new element types
const elementTypes = {
  text: TextElement,
  image: ImageElement,
  shape: ShapeElement,
  // Easy to extend with new types
};
```

#### **Template System**

```typescript
// ✅ Flexible template structure
interface Template {
  id: string;
  name: string;
  description: string;
  backgroundColor?: string;
  elements: SlideElement[];
  // Easy to add new template properties
}
```

### 🎯 **Initiative & Extras**

#### **Advanced Features**

- ✅ **Auto-save**: Automatic presentation saving
- ✅ **Error Recovery**: Graceful error handling with fallbacks
- ✅ **Performance Optimization**: Lazy loading and memoization
- ✅ **Accessibility**: ARIA attributes and keyboard navigation

#### **Developer Experience**

- ✅ **Path Aliases**: Clean import paths (`@/components`)
- ✅ **Hot Reload**: Instant development feedback
- ✅ **Type Checking**: Real-time TypeScript validation
- ✅ **Code Formatting**: Automatic Prettier formatting

---

## 🔧 Template Population via API

### 📊 **How It Works**

The template population system dynamically replaces placeholder content with real data from API responses.

#### **1. Template Definition**

```typescript
// ✅ Templates contain placeholders
{
  id: "property-image",
  type: "image",
  content: "{{images[0]}}",  // Placeholder for image URL
}

{
  id: "property-type",
  type: "text",
  content: "{{propertyType}}",  // Placeholder for property type
}
```

#### **2. Data Structure**

```typescript
// ✅ Mock API response structure
interface RealEstateData {
  propertyType: string;
  description: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  price: string;
  images: string[];
  agent: {
    name: string;
    phone: string;
  };
}
```

#### **3. Population Logic**

```typescript
// ✅ Smart placeholder replacement
export const populateTemplate = (slide: Slide, data: RealEstateData): Slide => {
  const populatedElements = slide.elements.map((element) => {
    if (element.type === "image" && element.content.includes("{{images[")) {
      // Handle image placeholders
      const imageMatch = element.content.match(/{{images\[(\d+)\]}}/)
      if (imageMatch) {
        const imageIndex = parseInt(imageMatch[1])
        return { ...element, content: data.images[imageIndex] }
      }
    } else {
      // Handle text placeholders
      let populatedContent = element.content
      Object.entries(data).forEach(([key, value]) => {
        populatedContent = populatedContent.replace(
          new RegExp(`{{${key}}}`, "g"),
          String(value)
        )
      }
      return { ...element, content: populatedContent }
    }
    return element
  })

  return { ...slide, elements: populatedElements }
}
```

#### **4. Usage Example**

```typescript
// ✅ Simple API integration
const handlePopulateTemplate = async () => {
  try {
    // Fetch data from API
    const response = await fetch("/api/property-data");
    const data = await response.json();

    // Populate current slide
    const populatedSlide = populateTemplate(currentSlide, data);
    updateSlide(populatedSlide);

    showToast.success("Template populated successfully!");
  } catch (error) {
    showToast.error("Failed to populate template");
  }
};
```

### 🎯 **Supported Placeholders**

| Placeholder        | Type      | Example              |
| ------------------ | --------- | -------------------- |
| `{{images[0]}}`    | Image URL | Property photo       |
| `{{propertyType}}` | Text      | "Luxury Villa"       |
| `{{description}}`  | Text      | Property description |
| `{{address}}`      | Text      | "123 Main St"        |
| `{{bedrooms}}`     | Number    | 3                    |
| `{{bathrooms}}`    | Number    | 2.5                  |
| `{{sqft}}`         | Number    | 2500                 |
| `{{yearBuilt}}`    | Number    | 2018                 |
| `{{price}}`        | Text      | "$750,000"           |
| `{{agent.name}}`   | Text      | "Sarah Johnson"      |
| `{{agent.phone}}`  | Text      | "(310) 555-0123"     |

---

## 🚀 Adding Future Features

### 🎯 **Easy Extension Points**

#### **1. New Element Types**

```typescript
// ✅ Add new element types easily
// 1. Add to types
interface SlideElement {
  type: "text" | "image" | "shape" | "chart" | "video"; // New types
}

// 2. Create component
export const ChartElement = ({ element, ...props }) => {
  return <div>Chart Component</div>;
};

// 3. Add to element registry
const elementTypes = {
  text: TextElement,
  image: ImageElement,
  shape: ShapeElement,
  chart: ChartElement, // New element
};
```

#### **2. New Templates**

```typescript
// ✅ Add new templates easily
export const predefinedTemplates = [
  // Existing templates...
  {
    id: "template-chart-presentation",
    name: "Chart Presentation",
    description: "Data visualization template",
    backgroundColor: "#ffffff",
    elements: [
      // Template elements...
    ],
  },
];
```

#### **3. New Export Formats**

```typescript
// ✅ Add export formats
export const exportToPowerPoint = async (slides: Slide[]) => {
  // PowerPoint export logic
};

export const exportToKeynote = async (slides: Slide[]) => {
  // Keynote export logic
};
```

#### **4. New API Integrations**

```typescript
// ✅ Add new data sources
export const populateFromCRM = async (slide: Slide) => {
  const crmData = await fetchCRMData();
  return populateTemplate(slide, crmData);
};

export const populateFromMLS = async (slide: Slide) => {
  const mlsData = await fetchMLSData();
  return populateTemplate(slide, mlsData);
};
```

### 🔧 **Development Workflow**

#### **1. Feature Branch Workflow**

```bash
# ✅ Create feature branch
git checkout -b feature/new-chart-element

# ✅ Develop feature
# Add component, types, tests

# ✅ Test thoroughly
npm run test
npm run type-check

# ✅ Create pull request
git push origin feature/new-chart-element
```

#### **2. Component Development**

```typescript
// ✅ Follow established patterns
export const NewElement = ({ element, isSelected, onUpdate }) => {
  // 1. Use consistent props interface
  // 2. Implement selection handling
  // 3. Add error boundaries
  // 4. Include accessibility features

  return (
    <ErrorBoundary fallback={<ElementErrorFallback />}>
      <div className="element-container">{/* Element content */}</div>
    </ErrorBoundary>
  );
};
```

---

## 📸 Screenshots

### 🎨 **Main Interface**

![Main Interface](screenshots/main-interface.png)
_Professional slide editor with sidebar navigation and canvas area_

### 📱 **Template Selection**

![Template Selection](screenshots/template-selection.png)
_Template gallery with real estate specific designs_

### 🖱️ **Drag & Drop**

![Drag and Drop](screenshots/drag-drop.png)
_Intuitive slide reordering with visual feedback_

### 📄 **PDF Export**

![PDF Export](screenshots/pdf-export.png)
_High-quality PDF output with professional formatting_

### 🎯 **Template Population**

![Template Population](screenshots/template-population.png)
_Dynamic content replacement with real property data_

### 📊 **Real-time Preview**

![Real-time Preview](screenshots/preview.png)
_Full-screen preview mode for presentation review_

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### 🚀 **Getting Started**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### 📋 **Development Guidelines**

- Follow TypeScript best practices
- Maintain consistent code formatting
- Add appropriate error handling
- Include accessibility features
- Write self-documenting code

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first styling
- **Vite** for the fast build tooling
- **Real Estate Community** for feedback and inspiration

---

**Built with ❤️ for real estate professionals**
