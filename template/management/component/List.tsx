import React from "react";
import {Button, PageHeader} from "antd";
import Page from "page/main/component/Page";
import {FormBase, FormList} from "widget/FormBase";
import {Table} from "widget/Table";
import {useBinaryAction, useLoadingStatus} from "@wonder/core-fe";
import {connect} from "react-redux";
import useRuntimeState from "hooks/useRuntimeState";
import {actions} from "../page";
import {LOAD_LIST} from "../type";

interface Props {
    lists: any;
}

const List: React.FC<Props> = ({lists = []}) => {
    const loading = useLoadingStatus(LOAD_LIST);
    const {pagination} = useRuntimeState("%lowercase name%");
    const changePage = useBinaryAction(actions.changePage);

    const formList: FormList = [];

    const columns = [
        {
            title: "title",
            dataIndex: "dataIndex",
        },
    ];

    const onFinish = (values: any) => {};

    return (
        <Page showBackground header={<PageHeader title="title" extra={[<Button key="create" />]} />}>
            <FormBase loading={loading} formList={formList} onFinish={onFinish} />
            <Table loading={loading} rowKey="id" columns={columns} dataSource={lists} pagination={pagination} onChange={changePage} />
        </Page>
    );
};

export default connect()(List);
