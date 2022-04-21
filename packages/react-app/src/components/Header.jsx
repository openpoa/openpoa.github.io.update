import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header({link, title, subTitle}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div style={{borderBottom: '1px solid lightgray'}}>
      <PageHeader
        title={title}
        subTitle={subTitle}
        style={{ cursor: "pointer" }}
        />
      </div>
    </a>
  );
}


Header.defaultProps = {
  link: "https://github.com/austintgriffith/scaffold-eth",
  title: "Open POA",
  subTitle: "EVM compatible proof of authority side-chain",
}