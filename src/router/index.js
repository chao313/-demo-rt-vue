import Vue from 'vue'
import Router from 'vue-router'


/**
 * 管理边栏的地方
 */
Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'
//登陆界面
const Login = r => require.ensure([], () => r(require('@/views/login/index')), 'login')
const AdminLogin = r => require.ensure([], () => r(require('@/views/login/AdminIndex')), 'AdminLogin')
const ForgetPassword = r => require.ensure([], () => r(require('@/views/login/ForgetPassword')), 'ForgetPassword')


const ResourceManagerList = r => require.ensure([], () => r(require('@/views/ResourceManager/List')), 'ResourceManagerList')
const ResourceManagerAdd = r => require.ensure([], () => r(require('@/views/ResourceManager/Add')), 'ResourceManagerAdd')
const ResourceManagerView = r => require.ensure([], () => r(require('@/views/ResourceManager/View')), 'ResourceManagerView')

/* ProjectModuleUpdate更新 */
const ProjectModuleView = r => require.ensure([], () => r(require('@/views/ProjectModule/view')), 'ProjectModuleView')
/* ProjectModuleEdit编辑 */
const ProjectModuleEdit = r => require.ensure([], () => r(require('@/views/ProjectModule/edit')), 'ProjectModuleEdit')
/* ProjectModuleList列表 */
const ProjectModuleList = r => require.ensure([], () => r(require('@/views/ProjectModule/list')), 'ProjectModuleList')
/* ProjectModuleAdd添加 */
const ProjectModuleAdd = r => require.ensure([], () => r(require('@/views/ProjectModule/add')), 'ProjectModuleAdd')

/* ProjectPlusModuleUpdate更新 */
const ProjectPlusModuleView = r => require.ensure([], () => r(require('@/views/ProjectPlusModule/view')), 'ProjectPlusModuleView')
/* ProjectPlusModuleEdit编辑 */
const ProjectPlusModuleEdit = r => require.ensure([], () => r(require('@/views/ProjectPlusModule/edit')), 'ProjectPlusModuleEdit')
/* ProjectPlusModuleList列表 */
const ProjectPlusModuleList = r => require.ensure([], () => r(require('@/views/ProjectPlusModule/list')), 'ProjectPlusModuleList')
/* ProjectPlusModuleAdd添加 */
const ProjectPlusModuleAdd = r => require.ensure([], () => r(require('@/views/ProjectPlusModule/add')), 'ProjectPlusModuleAdd')


/* ProjectPlusModuleAdd添加 */
const Graph = r => require.ensure([], () => r(require('@/views/graph/Graph')), 'Graph');
const GraphTrack = r => require.ensure([], () => r(require('@/views/graph/GraphTrack')), 'Graph');
const GraphCategoryTree = r => require.ensure([], () => r(require('@/views/graph/GraphCategoryTree')), 'Graph');

export const constantRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/Graph',
        name: 'Graph',
        meta: {
            title: 'Graph'
        },
        noDropdown: true,
        children: [
            {
                path: 'Graph',
                component: Graph,
                name: 'Graph',
                meta: {
                    title: 'Graph'
                },
                hidden: false
            },
            {
                path: 'GraphTrack',
                component: GraphTrack,
                name: 'GraphTrack',
                meta: {
                    title: 'GraphTrack'
                },
                hidden: false
            },
            {
                path: 'GraphCategoryTree',
                component: GraphCategoryTree,
                name: 'GraphCategoryTree',
                meta: {
                    title: 'GraphCategoryTree'
                },
                hidden: false
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/AdminLogin',
        component: AdminLogin,
        hidden: false
    },
    {
        path: '/ForgetPassword',
        component: ForgetPassword,
        hidden: false
    }
]
export const routerMap = {
    "9901": {
        path: 'test/test',
        component: Login,
        name: 'UserMgt',
        meta: {
            title: '用户管理'
        }
    }
}
export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})
