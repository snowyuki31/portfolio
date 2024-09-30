import groq from "groq";
import { sanityClient } from "sanity:client";
import type { GetPostsQueryResult, GetPostQueryResult } from "../sanity.types";

export const fetchPosts = async () => {
  const getPostsQuery = groq`*[_type == "post"]`;
  return await sanityClient.fetch<GetPostsQueryResult>(getPostsQuery);
};

export interface FetchPostParams {
  slug: string;
}

export const fetchPost = async (params: FetchPostParams) => {
  const getPostQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
  return await sanityClient.fetch<GetPostQueryResult>(getPostQuery, params);
};
