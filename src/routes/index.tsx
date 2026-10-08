import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/Portfolio";
import { I18nProvider } from "@/lib/i18n";

const title = "Mohammed Bourass — Computer Science Engineer (Génie Informatique) & Software Engineer";
const description =
  "Backend-heavy web, desktop and mobile products with ASP.NET Core, Laravel, React and Flutter. Based in Fès, Morocco. Open to PFE internship and freelance.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohammed Bourass",
          jobTitle: "Computer Science Engineer (Génie Informatique) and Software Engineer",
          worksFor: { "@type": "Organization", name: "eByte Software" },
          alumniOf: "ENSAF",
          address: { "@type": "PostalAddress", addressLocality: "Fès", addressCountry: "MA" },
          sameAs: [
            "https://github.com/mohammedbourass-youssef",
            "https://www.linkedin.com/in/mohammed-bourass-39538a293/",
            "https://www.youtube.com/@mohammedBourassProjects",
          ],
        }),
      },
    ],
  }),
  component: () => (
    <I18nProvider>
      <Portfolio />
    </I18nProvider>
  ),
});
