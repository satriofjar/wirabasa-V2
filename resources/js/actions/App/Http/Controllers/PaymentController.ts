import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/payment',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::index
* @see app/Http/Controllers/PaymentController.php:15
* @route '/payment'
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

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/payment/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::create
* @see app/Http/Controllers/PaymentController.php:23
* @route '/payment/create'
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
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:36
* @route '/payment'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/payment',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:36
* @route '/payment'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:36
* @route '/payment'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:36
* @route '/payment'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::store
* @see app/Http/Controllers/PaymentController.php:36
* @route '/payment'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
export const show = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/payment/{payment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
show.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return show.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
show.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
show.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
const showForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
showForm.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::show
* @see app/Http/Controllers/PaymentController.php:59
* @route '/payment/{payment}'
*/
showForm.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
export const edit = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/payment/{payment}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
edit.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return edit.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
edit.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
edit.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
const editForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
editForm.get = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PaymentController::edit
* @see app/Http/Controllers/PaymentController.php:67
* @route '/payment/{payment}/edit'
*/
editForm.head = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
export const update = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/payment/{payment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
update.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return update.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
update.put = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
update.patch = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
const updateForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
updateForm.put = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::update
* @see app/Http/Controllers/PaymentController.php:75
* @route '/payment/{payment}'
*/
updateForm.patch = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\PaymentController::destroy
* @see app/Http/Controllers/PaymentController.php:83
* @route '/payment/{payment}'
*/
export const destroy = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/payment/{payment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PaymentController::destroy
* @see app/Http/Controllers/PaymentController.php:83
* @route '/payment/{payment}'
*/
destroy.url = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payment: args }
    }

    if (Array.isArray(args)) {
        args = {
            payment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payment: args.payment,
    }

    return destroy.definition.url
            .replace('{payment}', parsedArgs.payment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PaymentController::destroy
* @see app/Http/Controllers/PaymentController.php:83
* @route '/payment/{payment}'
*/
destroy.delete = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PaymentController::destroy
* @see app/Http/Controllers/PaymentController.php:83
* @route '/payment/{payment}'
*/
const destroyForm = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PaymentController::destroy
* @see app/Http/Controllers/PaymentController.php:83
* @route '/payment/{payment}'
*/
destroyForm.delete = (args: { payment: string | number } | [payment: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const PaymentController = { index, create, store, show, edit, update, destroy }

export default PaymentController