import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MidtransController::handleNotification
* @see app/Http/Controllers/MidtransController.php:10
* @route '/midtrans/payment-notification'
*/
export const handleNotification = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleNotification.url(options),
    method: 'post',
})

handleNotification.definition = {
    methods: ["post"],
    url: '/midtrans/payment-notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\MidtransController::handleNotification
* @see app/Http/Controllers/MidtransController.php:10
* @route '/midtrans/payment-notification'
*/
handleNotification.url = (options?: RouteQueryOptions) => {
    return handleNotification.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MidtransController::handleNotification
* @see app/Http/Controllers/MidtransController.php:10
* @route '/midtrans/payment-notification'
*/
handleNotification.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: handleNotification.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MidtransController::handleNotification
* @see app/Http/Controllers/MidtransController.php:10
* @route '/midtrans/payment-notification'
*/
const handleNotificationForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleNotification.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\MidtransController::handleNotification
* @see app/Http/Controllers/MidtransController.php:10
* @route '/midtrans/payment-notification'
*/
handleNotificationForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: handleNotification.url(options),
    method: 'post',
})

handleNotification.form = handleNotificationForm

const MidtransController = { handleNotification }

export default MidtransController