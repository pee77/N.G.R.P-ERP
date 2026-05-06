import RegularPageContent from "@/components/blog/RegularPageContent";

export const metadata = {
  title: "Regular Page",
  description: "General content page with editorial layout and long-form text.",
  alternates: {
    canonical: "/regular-page",
  },
};

export default function RegularPage() {
  return (
    <main>
      <RegularPageContent />
    </main>
  );
}
