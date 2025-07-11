
export type ProjectsListProps = {
  limit: number;
  selectedCategory: string;
  isFeatured: boolean;
};

// export interface GetCacheKeyParams {
//     category: string;
//     isFeatured: boolean;
// }


export interface Project {
    _id: string;
    title: string;
    coverImg: string;
    location: string;
}