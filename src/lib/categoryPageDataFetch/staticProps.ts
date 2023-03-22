
import {  GetStaticProps } from "next";

import axios from "axios";

import { ICategory, paths } from "./types";

const getStaticProps: GetStaticProps<ICategory> = async () => {
  try {
    const categoryProps: paths[] = await axios.get(`${process.env.SERVER}/api/category/all`)
      .then((response) => {
        return response.data
      })
    return { props: { categoriesPaths: categoryProps } }

  } catch (error) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }
};


export { getStaticProps };
