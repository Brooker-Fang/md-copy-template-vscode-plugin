import React from "react";
import {PageHeader} from "antd";
import Page from "page/main/component/Page";
import {connect} from "react-redux";

interface Props {}

const Action: React.FC<Props> = () => {
    return <Page showBackground header={<PageHeader title="Create XXX" />}></Page>;
};

export default connect()(Action);
