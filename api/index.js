import useSWR from "swr";
import axios from "axios";
export const fetcher = (url) =>
  fetch("https://food-app-lli5.onrender.com" + url, {}).then((res) =>
    res.json()
  );

// export const Basehttps://food-app-lli5.onrender.com/";
export const api = axios.create({
  baseURL: "https://food-app-lli5.onrender.com",
});

// export const useBlog = () => {
//   const { data, error, mutate } = useSWR("/api/blogs?populate=*", fetcher);

//   return {
//     mutate,
//     blogs: data?.data ?? [],
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export const useBlogById = (id) => {
//   const { data, error, mutate } = useSWR(
//     `/api/blogs/${id}?populate=*`,
//     fetcher
//   );

//   return {
//     mutate,
//     blog: data?.data ?? {},
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

export const useCategory = () => {
  const { data, error, mutate } = useSWR(`/api/categories?populate=*`, fetcher);
  return {
    mutate,
    categories: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
};

export const useFeatures = () => {
  const { data, error, mutate } = useSWR(
    `/api/features?populate=restaurants.image&populate=restaurants.dishes.image`,
    fetcher
  );
  return {
    mutate,
    features: data?.data ?? [],
    isLoading: !error && !data,
    isError: error,
  };
};

// export const useCategoryBlog = (name) => {
//     const { data, error, mutate } = useSWR(
//       `/api/dishes?filters[category][name][$contains]=${name}&populate=*`,
//       fetcher
//     );
//     return {
//       mutate,
//       blogs: data?.data ?? [],
//       isLoading: !error && !data,
//       isError: error,
//     };
//   };
