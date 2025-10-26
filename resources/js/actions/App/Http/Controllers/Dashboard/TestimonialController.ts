import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/testimony',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::index
* @see app/Http/Controllers/Dashboard/TestimonialController.php:15
* @route '/testimony'
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
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/testimony/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::create
* @see app/Http/Controllers/Dashboard/TestimonialController.php:26
* @route '/testimony/create'
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
* @see \App\Http\Controllers\Dashboard\TestimonialController::store
* @see app/Http/Controllers/Dashboard/TestimonialController.php:34
* @route '/testimony'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/testimony',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::store
* @see app/Http/Controllers/Dashboard/TestimonialController.php:34
* @route '/testimony'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::store
* @see app/Http/Controllers/Dashboard/TestimonialController.php:34
* @route '/testimony'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::store
* @see app/Http/Controllers/Dashboard/TestimonialController.php:34
* @route '/testimony'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::store
* @see app/Http/Controllers/Dashboard/TestimonialController.php:34
* @route '/testimony'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
export const show = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/testimony/{testimony}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
show.url = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimony: args }
    }

    if (Array.isArray(args)) {
        args = {
            testimony: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimony: args.testimony,
    }

    return show.definition.url
            .replace('{testimony}', parsedArgs.testimony.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
show.get = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
show.head = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
const showForm = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
showForm.get = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::show
* @see app/Http/Controllers/Dashboard/TestimonialController.php:49
* @route '/testimony/{testimony}'
*/
showForm.head = (args: { testimony: string | number } | [testimony: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
export const edit = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/testimony/{testimony}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
edit.url = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimony: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimony: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimony: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimony: typeof args.testimony === 'object'
        ? args.testimony.id
        : args.testimony,
    }

    return edit.definition.url
            .replace('{testimony}', parsedArgs.testimony.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
edit.get = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
edit.head = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
const editForm = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
editForm.get = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::edit
* @see app/Http/Controllers/Dashboard/TestimonialController.php:57
* @route '/testimony/{testimony}/edit'
*/
editForm.head = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
export const update = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/testimony/{testimony}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
update.url = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimony: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimony: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimony: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimony: typeof args.testimony === 'object'
        ? args.testimony.id
        : args.testimony,
    }

    return update.definition.url
            .replace('{testimony}', parsedArgs.testimony.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
update.put = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
update.patch = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
const updateForm = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
updateForm.put = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::update
* @see app/Http/Controllers/Dashboard/TestimonialController.php:67
* @route '/testimony/{testimony}'
*/
updateForm.patch = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Dashboard\TestimonialController::destroy
* @see app/Http/Controllers/Dashboard/TestimonialController.php:82
* @route '/testimony/{testimony}'
*/
export const destroy = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/testimony/{testimony}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::destroy
* @see app/Http/Controllers/Dashboard/TestimonialController.php:82
* @route '/testimony/{testimony}'
*/
destroy.url = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimony: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { testimony: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            testimony: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        testimony: typeof args.testimony === 'object'
        ? args.testimony.id
        : args.testimony,
    }

    return destroy.definition.url
            .replace('{testimony}', parsedArgs.testimony.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::destroy
* @see app/Http/Controllers/Dashboard/TestimonialController.php:82
* @route '/testimony/{testimony}'
*/
destroy.delete = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::destroy
* @see app/Http/Controllers/Dashboard/TestimonialController.php:82
* @route '/testimony/{testimony}'
*/
const destroyForm = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Dashboard\TestimonialController::destroy
* @see app/Http/Controllers/Dashboard/TestimonialController.php:82
* @route '/testimony/{testimony}'
*/
destroyForm.delete = (args: { testimony: string | { id: string } } | [testimony: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const TestimonialController = { index, create, store, show, edit, update, destroy }

export default TestimonialController