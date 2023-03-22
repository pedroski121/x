
import { GetStaticPaths} from "next";
import axios from "axios";
import { paths } from "./types";
const getStaticPaths: GetStaticPaths = async () => {
  try {
    const categories: paths[] = await axios.get(`${process.env.SERVER}/api/category/all`)
      .then((res) => {
        return res.data
      })
    const categoriesPath = categories?.map((category: paths) => ({
      params: { category: category.name },
    }));
    return { paths: categoriesPath, fallback: false };

  } catch (error) {
    return {
      paths: [],
      fallback: false
    }
  }
};

export { getStaticPaths};
