import BeasiswaDetail, { scholarships } from "@/components/beasiswa-detail";

export default async function Page(propsPromise) {
  const { params } = await propsPromise;
  const slug = params.slug;
  const scholarship = scholarships.find((b) => b.slug === slug);

  return <BeasiswaDetail scholarship={scholarship} />;
}