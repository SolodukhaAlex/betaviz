import React from "react";import Header from "../../Header/HeaderContainer";import Layout from "../Layout/Layout";const MainContentWrraper = props => {    let Main = props.component;    return (        <>            {props.isVisibleHeader ?  <Header {...props}/> : null}            <Layout>                <Main {...props}/>            </Layout>        </>    );};export default MainContentWrraper;