import Blog from "@/components/Blog";
import Categories from "@/components/Categories";
import { getBlogs } from "@/lib/actions/blog.actions";
import { getCategories } from "@/lib/actions/category.actions";

async function fetchBlogs() {
  return await getBlogs();
}

async function fetchCategories() {
  return await getCategories();
}

export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  // console.log(blogs);
  return (
    <div>
      <Categories categories={categories?.documents}/>
      <Blog blogs={blogs?.documents}/>
    </div>
  );
}
