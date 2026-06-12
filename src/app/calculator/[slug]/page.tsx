import { permanentRedirect } from "next/navigation";
export { generateMetadata, generateStaticParams } from "../../[slug]/page";

type CalculatorRedirectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CalculatorRedirectPage({
  params,
}: CalculatorRedirectPageProps) {
  const { slug } = await params;

  permanentRedirect(`/${slug}`);
}
