import React from "react";
class LeftSection extends React.Component {
    render() {
        return (
            <section className="l-content">
                <a href="/home" className="active">Home</a>
                <a href="/dashboard">Dashboard</a>
            </section>
        );
    }
}
export default LeftSection;