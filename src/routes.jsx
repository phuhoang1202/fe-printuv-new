// Admin Imports
import MainDashboard from '@pages/admin/views/admin/default'

// Icon Imports
import IconDashboard from '@assets/icons/admin/IconDashboard.jsx'
import IconMember from '@assets/icons/admin/IconMember.jsx'
import IconProduct from '@assets/icons/admin/IconProduct.jsx'
import IconCategory from '@assets/icons/admin/IconCategory.jsx'
import MemberInformation from '@pages/admin/views/admin/member/featureMember/MemberInformation.jsx'
import AddNewMember from '@pages/admin/views/admin/member/featureMember/AddNewMember'
import ManagerProduct from '@pages/admin/views/admin/product/ManagerProduct'
import ProductAdmin from './pages/admin/views/admin/product'
import AddNewProduct from '@pages/admin/views/admin/product/featureProduct/AddNewProduct'
import EditProduct from '@pages/admin/views/admin/product/featureProduct/EditProduct'
import MemberAdmin from '@pages/admin/views/admin/member'
import ManagerMember from '@pages/admin/views/admin/member/ManagerMember'
import CategoryAdmin from '@pages/admin/views/admin/category'
import ManagerCategory from './pages/admin/views/admin/category/ManagerCategory'
import HistoryMember from '@pages/admin/views/admin/member/featureMember/HistoryMember'
import DetailMember from '@pages/admin/views/admin/member/featureMember/DetailMember'

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'manager-dashboard',
    icon: <IconDashboard />,
    component: <MainDashboard />,
  },
  {
    name: 'Manage Member',
    layout: '/admin',
    path: 'manager-member',
    icon: <IconMember />,
    component: <MemberAdmin />,
    children: [
      {
        index: true,
        icon: <IconMember />,
        component: <ManagerMember />,
      },
      {
        name: 'Add New Member',
        path: 'add-new-member',
        component: <AddNewMember />,
      },
      {
        name: 'Detail Member',
        path: 'detail-member/:id',
        component: <DetailMember />,
      },
      {
        name: 'Member Information',
        path: 'edit-member/:id',
        component: <MemberInformation />,
      },
      {
        name: 'Member History',
        path: 'edit-member/:id/history-member',
        component: <HistoryMember />,
      },
    ],
  },
  {
    name: 'Manage Product',
    layout: '/admin',
    path: 'manager-product',
    icon: <IconProduct />,
    component: <ProductAdmin />,
    children: [
      {
        index: true,
        icon: <IconProduct />,
        component: <ManagerProduct />,
      },
      {
        name: 'Add New Product',
        path: 'add-product',
        component: <AddNewProduct />,
      },
      {
        name: 'Edit Product',
        path: 'edit-product/:id',
        component: <EditProduct />,
      },
    ],
  },
  {
    name: 'Manager Category',
    layout: '/admin',
    path: 'manager-category',
    icon: <IconCategory />,
    component: <CategoryAdmin />,
    children: [
      {
        index: true,
        component: <ManagerCategory />,
      },
    ],
  },
]

export default routes
