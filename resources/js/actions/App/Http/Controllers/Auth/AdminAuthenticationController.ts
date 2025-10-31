import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/login-admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::create
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:16
* @route '/login-admin'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::store
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:27
* @route '/login-admin'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/login-admin',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::store
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:27
* @route '/login-admin'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::store
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:27
* @route '/login-admin'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::store
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:27
* @route '/login-admin'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Auth\AdminAuthenticationController::store
* @see app/Http/Controllers/Auth/AdminAuthenticationController.php:27
* @route '/login-admin'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const AdminAuthenticationController = { create, store }

export default AdminAuthenticationController