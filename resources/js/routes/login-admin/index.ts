import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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

const loginAdmin = {
    store: Object.assign(store, store),
}

export default loginAdmin