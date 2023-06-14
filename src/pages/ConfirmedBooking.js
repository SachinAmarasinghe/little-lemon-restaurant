import Layout from "../components/Layout";

export default function ConfirmedBooking() {
    return (
        <Layout>
            <div className="confirmed-main">
                <p className="title confirmed-title">Booking Confirmed!!!</p>
                <p className="subtitle confirmed-subtitle">
                    Please provide your name and contact number at the reception upon
                    arrival
                </p>
                <p className="subtitle confirmed-subtitle">We are excited to serve you</p>
            </div>
        </Layout>
    );
}
