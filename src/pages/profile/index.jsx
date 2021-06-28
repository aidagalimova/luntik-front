import React from "react";
import ProfileInfo from "../../components/profile-info";
import TicketsList from "../../components/tickets-list";
import "./index.scss";
function ProfilePage() {
    return (
        <div className="profile-page">
            <ProfileInfo />
            <TicketsList />
        </div>)
}
export default ProfilePage;