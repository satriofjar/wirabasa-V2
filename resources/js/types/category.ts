export interface CategoryType {
    id: string;
    name: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
}

export interface CategoryFormType {
    name: string;
    slug: string;
}
