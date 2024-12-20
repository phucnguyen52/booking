import React, { useState } from "react";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer";
import { APP_ROUTER } from "../../utils/Constants";
import Cookies from "js-cookie";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
    FundViewOutlined,
    AppstoreOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    ShopOutlined,
    TeamOutlined,
    SolutionOutlined,
    LogoutOutlined,
    HomeOutlined,
    ProductOutlined,
    ImportOutlined,
    PercentageOutlined,
    SisternodeOutlined,
    DollarOutlined,
    FileSyncOutlined,
    PlusCircleOutlined,
    MinusCircleOutlined,
    CarOutlined,
    ContainerOutlined,
    BarChartOutlined,
    InboxOutlined,
    WalletOutlined,
    LineChartOutlined,
    FundOutlined,
    CommentOutlined,
    DiffOutlined,
    DeploymentUnitOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

import Logo from "../../components/Logo/Logo";
import ToggleThemeButton from "../../components/ToggleTheme/ToggleThemButton";

const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
function AdminLayout() {
    const token = Cookies.get("token");
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleTheme = () => {
        setDarkTheme((darkTheme) => !darkTheme);
    };
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        Cookies.remove("token");
        navigate("/home");
        window.location.reload();
    };
    const items = [
        // getItem(
        //     <Link to={APP_ROUTER.HOME}>Trang chủ</Link>,
        //     "1",
        //     <HomeOutlined />
        // ),
        getItem("Quản lý", "sub1", <AppstoreOutlined />, [
            getItem(
                <Link to={APP_ROUTER.INFORHOTEL}>Thông tin khách sạn</Link>,
                "2",
                <FundViewOutlined />
            ),
            getItem(
                <Link to={APP_ROUTER.LISTORDERS}>Đặt phòng</Link>,
                "3",
                <ShoppingCartOutlined />
            ),
            getItem(
                <Link to={APP_ROUTER.TIMELINE}>Trạng thái phòng</Link>,
                "4",
                <ProductOutlined />
            ),
            getItem(
                <Link to={APP_ROUTER.ROOM}>Phòng</Link>,
                "5",
                <ImportOutlined />
            ),
            getItem(
                <Link to={APP_ROUTER.SERVICES}>Dịch vụ</Link>,
                "21",
                <DiffOutlined />
            ),
            getItem(
                <Link to={APP_ROUTER.ROOMPRICE}>Giá phòng</Link>,
                "6",
                <ShopOutlined />
            ),
            // getItem(
            //     <Link to={APP_ROUTER.VOUCHER}>Khuyến mãi</Link>,
            //     "7",
            //     <PercentageOutlined />
            // ),
            // getItem(
            //     <Link to={APP_ROUTER.LIST_CATEGORY}>Loại sản phẩm</Link>,
            //     "22",
            //     <DeploymentUnitOutlined />
            // ),
            // getItem(
            //     <Link to={APP_ROUTER.LIST_EMPLOYEE}>Nhân viên</Link>,
            //     "23",
            //     <TeamOutlined />
            // ),
        ]),
        getItem("Khách hàng", "sub2", <SolutionOutlined />, [
            // getItem(
            //     <Link to={APP_ROUTER.USER}>Khách hàng</Link>,
            //     "8",
            //     <UserOutlined />
            // ),
            getItem(
                <Link to={APP_ROUTER.LIST_PROVIDER}>Phân loại khách hàng</Link>,
                "9",
                <SisternodeOutlined />
            ),

            // getItem(
            //     <Link to={token ? APP_ROUTER.CHAT : APP_ROUTER.HOME}>
            //         Tư vấn khách hàng
            //     </Link>,
            //     "21",
            //     <CommentOutlined />
            // ),
        ]),
     
        getItem("Báo cáo", "sub4", <ContainerOutlined />, [
           
            getItem(
                <Link to={APP_ROUTER.REPORT_CATEGORY}>Hàng hóa</Link>,
                "16",
                <InboxOutlined />
            ),
            
        ]),
       
        getItem(
            <Link to={APP_ROUTER.LOGOUT}>Đăng xuất</Link>,
            "20",
            <LogoutOutlined />
        ),

    ];
    return (
        <>
            <div className="mx-auto w-full" style={{ maxWidth: "100vw" }}>
                <Layout
                    style={{
                        minHeight: "100vh",
                        position: "relative",
                    }}
                    theme={darkTheme ? "dark" : "light"}
                >
                    <Sider
                        width={250}
                        collapsible
                        collapsed={collapsed}
                        className="shadow-md overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:bg-gray-300
                                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                        onCollapse={(value) => setCollapsed(value)}
                        theme={darkTheme ? "dark" : "light"}
                    >
                        <Logo></Logo>
                        <Menu
                            defaultSelectedKeys={["1"]}
                            mode="inline"
                            items={items}
                            theme={darkTheme ? "dark" : "light"}
                            className="pt-5"
                        />
                     
                        <ToggleThemeButton
                            darkTheme={darkTheme}
                            toggleTheme={toggleTheme}
                        ></ToggleThemeButton>
                    </Sider>

                    <Layout
                        className="overflow-y-auto max-h-screen [&::-webkit-scrollbar]:w-2
                                [&::-webkit-scrollbar-track]:bg-gray-100
                                [&::-webkit-scrollbar-thumb]:bg-gray-300
                                dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                                dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                    >
                     
                        <Content className="bg-white">
                            <Outlet />
                            {/* <div>main layout</div> */}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </>
    );
}

export default AdminLayout;
