import React from "react";
import "./styles/App.scss";
import OrderInformation from "./components/hoc/OrderInformation/OrderInformation";
import Routes from "./routes/index"

const App = props => {

    return (
        <>
            <OrderInformation>
                <Routes/>
            </OrderInformation>
        </>
    );
};

export default App;




