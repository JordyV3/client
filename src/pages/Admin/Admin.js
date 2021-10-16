import React from "react";
import "./Admin.scss";
import { Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;

const data = [
  {
    id: "1",
    key: "1",
    gmail: "jordyvega@gmail.com",
    age: 32,
    tags: ["Administrador"],
  },
  {
    id: "2",
    key: "2",
    gmail: "jordyvega15@gmail.com",
    lastName: "Brown",
    age: 32,
    tags: ["Suscrito"],
  }
];

export default function Admin() {
  return (
    <div className="container">
      <Table dataSource={data}>
        <ColumnGroup title="Usuario Suscritos">
        <Column title="Id" dataIndex="id" key="id" />
          <Column title="Gmail" dataIndex="gmail" key="gamil" />
        </ColumnGroup>
        <Column
      title="Estado"
      dataIndex="tags"
      key="tags"
      render={tags => (
        <>
          {tags.map(tag => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )}
    />
      </Table>
    </div>
  );
}
