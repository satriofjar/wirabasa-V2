export interface ProductType {
    id: string;
    category_id: string;
    name: string;
    price: number;
    discount: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface ProductFormType {
    category_id: string;
    name: string;
    price: number;
    discount: number;
    is_active: boolean;
}
