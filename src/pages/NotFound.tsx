import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Seo
        title="Page not found | Clinova"
        description="That page does not exist on the Clinova website."
        path={location.pathname}
        noIndex
      />
      <main className="flex min-h-[60vh] items-center justify-center bg-muted">
        <div className="text-center px-4">
          <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
          <p className="mb-6 text-xl text-muted-foreground">
            That URL is not a Clinova page.
          </p>
          <Link to="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default NotFound;
