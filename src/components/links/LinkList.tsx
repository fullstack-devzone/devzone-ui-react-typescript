import React from "react";
import Link from "./Link";
import {LinksModel} from "../../models/LinkModels";

const LinkList: React.FC<LinksModel> = (links) => {

    return (
        <div>
            {links.data.map(link => <Link key={link.id} {...link}/>)}
        </div>
    );
};

export default LinkList;