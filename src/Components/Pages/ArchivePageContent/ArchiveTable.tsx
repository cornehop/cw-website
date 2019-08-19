import React from "react";
import { Table } from "react-bootstrap";
import { getArchiveCollection } from "../../../Constants/ArchiveCollection";
import { ArchiveItem } from "../../../Domain/ArchiveItem";
import { formatDate } from "../../../Domain/CustomDate";

export class ArchiveTable extends React.Component{
    private getTableContent(){
        let tableContent: JSX.Element[] = [];
        let publishedItems: ArchiveItem[] = getArchiveCollection();
        publishedItems.map((item: ArchiveItem) => {
            tableContent.push(
                <tr>
                    <td></td>
                    <td>{item.name}</td>
                    <td>{formatDate(item.date)}</td>
                </tr>
            );
        });

        return tableContent;
    }
    
    render(){
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Titel</th>
                        <th>Datum</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getTableContent()}
                </tbody>
            </Table>
        )
    }
}