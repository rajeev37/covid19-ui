import React from "react";
import InnerHeader from "../InnerHeader/InnerHeader.js";

import LeftSection from "../LeftSection/LeftSection.js";

import RightSection from "../RightSection/RightSection.js";

class Home extends React.Component {
    render() {
        return (
            <main id="inner-content">
                <InnerHeader />
                <LeftSection />
                <RightSection />

            </main>
        );
    }
}
export default Home;