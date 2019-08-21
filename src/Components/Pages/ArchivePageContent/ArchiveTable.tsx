import React from "react";
import { Table } from "react-bootstrap";
import { getArchiveCollection } from "../../../Constants/ArchiveCollection";
import { ArchiveItem, ArchiveItemType } from "../../../Domain/ArchiveItem";
import { FaRegFilePdf, FaRegFileVideo, FaRegQuestionCircle } from "react-icons/fa";

export class ArchiveTable extends React.Component{
    private getFileTypeIcon(type: ArchiveItemType){
        if (type === ArchiveItemType.newsletter){
            return (<FaRegFilePdf />);
        }
        else if (type === ArchiveItemType.video){
            return (<FaRegFileVideo />);
        }

        return (<FaRegQuestionCircle />);
    }

    private getFileLink(icon: JSX.Element, name: string, file: string){
        return (
            <a href={file}
               target="_blank"
               rel="noopener noreferrer">
                   {icon} {name}
            </a>
        )
    }
    
    private getTableContent(){
        let tableContent: JSX.Element[] = [];
        let publishedItems: ArchiveItem[] = getArchiveCollection();
        publishedItems.map((item: ArchiveItem, index: number) => {
            let icon = this.getFileTypeIcon(item.itemType);
            let link = this.getFileLink(icon, item.name, item.file);
            tableContent.push(
                <tr key={index}>
                    <td>{link}</td>
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
                        <th>Titel</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getTableContent()}
                </tbody>
            </Table>
        )
    }
}