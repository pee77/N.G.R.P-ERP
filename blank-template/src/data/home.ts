import type { Category, Product } from "@/types/commerce";

export const hero = {
  eyebrow: "B2B Tech & Lab",
  title: "Equipamiento, insumos y soporte técnico para laboratorios y operación B2B",
  ctaText: "Ver catálogo",
  ctaHref: "/shop",
  bgImage: "/src/assets/images/protonlab/hero-equipment.png",
};

export const categories: Category[] = [
  { id: "cat-equipos", name: "Equipamiento Clínico e Industrial", slug: "equipos", image: "https://placehold.co/600x600/0B1F33/FFF?text=Equipos", href: "/shop" },
  { id: "cat-reactivos", name: "Reactivos y Químicos", slug: "reactivos", image: "https://placehold.co/600x600/0EA5A4/FFF?text=Reactivos", href: "/shop" },
  { id: "cat-insumos", name: "Repuestos e Insumos", slug: "insumos", image: "https://placehold.co/600x600/2563EB/FFF?text=Insumos", href: "/shop" },
];

export const cta = {
  discountText: "Soporte",
  title: "Soporte técnico y continuidad operacional",
  ctaText: "Solicitar Soporte",
  ctaHref: "/support",
  bgImage: "https://placehold.co/1200x400/0B1F33/FFF?text=Continuidad+Operativa",
};

export const products: Product[] = [
  {
    id: "prod-centrifuga-industrial",
    sku: "EQ-CENT-001",
    slug: "centrifuga-industrial-pro",
    name: "Centrífuga Industrial Pro Series",
    brand: "TechLab",
    family: "Equipos",
    availability: "disponible",
    requiresInstallation: true,
    requiresMaintenance: true,
    price: 4500,
    currency: "USD",
    image: "https://placehold.co/400x500/FFF/0B1F33?text=Centrifuga",
    hoverImage: "https://placehold.co/400x500/F8FAFC/0EA5A4?text=Centrifuga+Abierta",
    categoryId: "cat-equipos",
    href: "/single-product-details",
    badge: { text: "Destacado", className: "new-badge" },
  },
  {
    id: "prod-espectrofotometro",
    sku: "EQ-SPEC-002",
    slug: "espectrofotometro-uv-vis",
    name: "Espectrofotómetro UV-VIS Advanced",
    brand: "OptiSci",
    family: "Equipos",
    availability: "bajo_pedido",
    requiresInstallation: true,
    requiresMaintenance: true,
    price: 8200,
    currency: "USD",
    image: "https://placehold.co/400x500/FFF/0B1F33?text=Espectrofotometro",
    categoryId: "cat-equipos",
    href: "/single-product-details",
  },
  {
    id: "prod-reactivo-pcr",
    sku: "RE-PCR-003",
    slug: "kit-reactivos-pcr-multiplex",
    name: "Kit Reactivos PCR Multiplex (100 rxn)",
    brand: "BioGen",
    family: "Reactivos",
    availability: "sujeto_stock",
    requiresInstallation: false,
    requiresMaintenance: false,
    price: 350,
    currency: "USD",
    image: "https://placehold.co/400x500/FFF/0B1F33?text=Reactivo+PCR",
    categoryId: "cat-reactivos",
    href: "/single-product-details",
    badge: { text: "-15% Volumen", className: "offer-badge" },
  },
  {
    id: "prod-microscopio",
    sku: "EQ-MIC-004",
    slug: "microscopio-fluorescencia",
    name: "Microscopio de Fluorescencia HD",
    brand: "OptiSci",
    family: "Equipos",
    availability: "disponible",
    requiresInstallation: true,
    requiresMaintenance: true,
    image: "https://placehold.co/400x500/FFF/0B1F33?text=Microscopio",
    categoryId: "cat-equipos",
    href: "/single-product-details",
  },
];

export const brands = [
  "https://placehold.co/200x100/F8FAFC/0B1F33?text=Marca+1",
  "https://placehold.co/200x100/F8FAFC/0B1F33?text=Marca+2",
  "https://placehold.co/200x100/F8FAFC/0B1F33?text=Marca+3",
  "https://placehold.co/200x100/F8FAFC/0B1F33?text=Marca+4",
  "https://placehold.co/200x100/F8FAFC/0B1F33?text=Marca+5",
  "https://placehold.co/200x100/F8FAFC/0B1F33?text=Marca+6",
];
