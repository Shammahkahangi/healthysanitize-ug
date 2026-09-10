import { Link } from "react-router-dom";

type PageHeroProps = {
  kicker: string;
  title: string;
  subtitle: string;
};

const PageHero = ({ kicker, title, subtitle }: PageHeroProps) => {
  return (
    <section className="bg-primary text-primary-foreground py-16 md:py-20">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold tracking-wide text-secondary mb-3">{kicker}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl leading-tight">{title}</h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl">{subtitle}</p>
        <nav aria-label="Breadcrumb" className="mt-8 text-sm text-primary-foreground/70">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-primary-foreground">{kicker}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHero;
