import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/layanan',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LayananContoller::index
* @see app/Http/Controllers/LayananContoller.php:14
* @route '/layanan'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const LayananContoller = { index }

export default LayananContoller