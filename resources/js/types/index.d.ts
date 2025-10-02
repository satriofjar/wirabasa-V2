import { InertiaLinkProps } from '@inertiajs/react';
import { on } from 'events';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}



// Category

export interface CategoryType {
    id: string;
    name: string;
    slug: string;
    description: string;
    created_at: Date;
    updated_at: Date;
}

export interface CategoryFormType {
    name: string;
    slug: string;
    description: string;
}

// Feature
export interface Feature {
    id?: string;
    name: string;
}

// Product
export interface ProductType {
    id: string;
    category_id: string;
    name: string;
    price: number;
    discount: number;
    is_active: boolean;
    course_class: CourseClass;
    features: Feature[];
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


export interface ProductModalProps {
    product: ProductType | null;
    isOpen: boolean;
    onClose: () => void;
}


export interface OrderType {
    id: string;
    user_id: string;
    product_id: string;
    product: producttype;
    order_editing: OrderEditingType;
    status: string;
    payment: PaymentType;
    created_at: date;
    updated_at: date;
}

export interface OrderEditingType {
    id: string;
    order_id: string;
    file_input: File | null;
    file_result: File | null;
    pages: number;
    created_at: date;
    updated_at: date;
}


export interface CourseClass {
    id: string;
    product_id: string;
    topic: string;
    zoom_link: string;
    yt_link: string;
    schedule: string;
    poster: File | null;
    is_active: boolean;
    created_at: date;
    updated_at: date;
}


export interface PaymentType {
    id: string;
    order_id: string;
    amount: number;
    method: string;
    proof: string;
    status: string;
    transaction_id: string;
    created_at: date;
    updated_at: date;
}
