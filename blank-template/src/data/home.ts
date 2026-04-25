import type { Category, Product } from "@/types/commerce";

export const hero = {
  title: "Equipamiento, insumos y soporte técnico para empresas de tecnología de vanguardia B2B",
  ctaText: "Ver catálogo",
  ctaHref: "/shop",
  bgImages: [
    "/src/assets/images/protonlab/tech_robot_1777091060991.png",
    "/src/assets/images/protonlab/tech_hardware_1777091078472.png",
    "/src/assets/images/protonlab/tech_nanotech_1777091090503.png"
  ],
};

export const categories: Category[] = [
  { id: "cat-equipos", name: "Robótica", slug: "equipos", image: "/src/assets/images/protonlab/tech_robot_1777091060991.png", href: "/shop" },
  { id: "cat-reactivos", name: "Hardware", slug: "reactivos", image: "/src/assets/images/protonlab/tech_hardware_1777091078472.png", href: "/shop" },
  { id: "cat-insumos", name: "Nanobots", slug: "insumos", image: "/src/assets/images/protonlab/tech_nanotech_1777091090503.png", href: "/shop" },
];

export const cta = {
  discountText: "Soporte",
  title: "Soporte técnico y continuidad operacional",
  ctaText: "Solicitar Soporte",
  ctaHref: "/support",
  bgImage: "/src/assets/images/protonlab/tech_support_1777092248138.png",
  opacity: 0.6,
};

export const products: Product[] = [
  {
    id: "prod-hardware-ia",
    sku: "HW-IA-001",
    slug: "cluster-ia-nexus",
    name: "Clúster de IA Nexus Server",
    brand: "Nexus",
    family: "Equipos",
    availability: "disponible",
    requiresInstallation: true,
    requiresMaintenance: true,
    price: 45000,
    currency: "USD",
    image: "/src/assets/images/protonlab/ai_hardware_1777123776193.png",
    hoverImage: "/src/assets/images/protonlab/ai_hardware_1777123776193.png",
    categoryId: "cat-equipos",
    href: "/single-product-details",
    badge: { text: "Destacado", className: "new-badge" },
  },
  {
    id: "prod-procesador-cuantico",
    sku: "HW-QC-002",
    slug: "procesador-cuantico-qcore",
    name: "Procesador Cuántico Q-Core",
    brand: "QuantumTech",
    family: "Componentes",
    availability: "bajo_pedido",
    requiresInstallation: true,
    requiresMaintenance: true,
    price: 150000,
    currency: "USD",
    image: "/src/assets/images/protonlab/quantum_processor_1777123790537.png",
    categoryId: "cat-equipos",
    href: "/single-product-details",
  },
  {
    id: "prod-ssd-vanguardia",
    sku: "HW-SSD-003",
    slug: "ssd-nvme-neo-force",
    name: "SSD NVMe Neo-Force PCIe 5.0",
    brand: "NeoStorage",
    family: "Componentes",
    availability: "sujeto_stock",
    requiresInstallation: false,
    requiresMaintenance: false,
    price: 850,
    currency: "USD",
    image: "/src/assets/images/protonlab/cutting_edge_ssd_1777123804662.png",
    categoryId: "cat-insumos",
    href: "/single-product-details",
    badge: { text: "Nuevo", className: "offer-badge" },
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
