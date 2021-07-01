import React from "react";
import {Card} from "antd";
import "./index.scss";

const {Meta} = Card;

function UserItem({film}) {
    return (
        <Meta className="userMeta"
              title={film.name}
        />
    )
}

export default UserItem;
