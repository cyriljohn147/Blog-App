import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import { getCategories } from "@/lib/actions/category.actions";

async function fetchCategories() {
  return await getCategories();
}

export default async function Home() {
  const categories = await fetchCategories();
  return (
    <div>
      <Categories categories={categories?.documents}/>
      <Blog />
    </div>
  );
}
