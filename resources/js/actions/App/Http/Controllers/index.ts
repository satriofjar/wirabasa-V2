import HomeController from './HomeController'
import LayananContoller from './LayananContoller'
import OrderController from './OrderController'
import MidtransController from './MidtransController'
import Dashboard from './Dashboard'
import PaymentController from './PaymentController'
import UserProfileContoller from './UserProfileContoller'
import Settings from './Settings'
import Auth from './Auth'

const Controllers = {
    HomeController: Object.assign(HomeController, HomeController),
    LayananContoller: Object.assign(LayananContoller, LayananContoller),
    OrderController: Object.assign(OrderController, OrderController),
    MidtransController: Object.assign(MidtransController, MidtransController),
    Dashboard: Object.assign(Dashboard, Dashboard),
    PaymentController: Object.assign(PaymentController, PaymentController),
    UserProfileContoller: Object.assign(UserProfileContoller, UserProfileContoller),
    Settings: Object.assign(Settings, Settings),
    Auth: Object.assign(Auth, Auth),
}

export default Controllers