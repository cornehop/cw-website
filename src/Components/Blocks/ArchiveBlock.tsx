import React from "react";
import { Table } from "react-bootstrap";
import { ArchiveItem } from "../../Domain/ArchiveItem";
import { ArchiveItemType, getArchiveItemType } from "../../Domain/ArchiveItemType";
import { FaRegFilePdf, FaRegFileVideo, FaRegQuestionCircle } from "react-icons/fa";

interface ArchiveTableState {
    data: ArchiveItem[]
}

export class ArchiveBlock extends React.Component<{}, ArchiveTableState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('/ArchiveCollection.json')
            .then((res) => res.json())
            .then((data) => {
                const items: ArchiveItem[] = [];
                data.map(
                    (item: { filepath: string; type: string; name: string; }) => items.push(
                        new ArchiveItem(
                            item.filepath,
                            getArchiveItemType(item.type),
                            item.name)
                    ));
                this.setState({
                    data: items
                });
            })
    }

    private getFileTypeIcon(type: ArchiveItemType) {
        if (type === ArchiveItemType.newsletter) {
            return (<FaRegFilePdf />);
        }
        else if (type === ArchiveItemType.video) {
            return (<FaRegFileVideo />);
        }

        return (<FaRegQuestionCircle />);
    }

    private getFileLink(icon: JSX.Element, name: string, file: string) {
        return (
            <a href={file}
                target="_blank"
                rel="noopener noreferrer">
                {icon} {name}
            </a>
        )
    }

    private getTableContent() {
        const { data } = this.state;
        let tableContent: JSX.Element[] = [];
        let publishedItems: ArchiveItem[] = data;
        publishedItems.map((item: ArchiveItem, index: number) => {
            let icon = this.getFileTypeIcon(item.itemType);
            let link = this.getFileLink(icon, item.name, item.file);
            return tableContent.push(
                <tr key={index}>
                    <td>{link}</td>
                </tr>
            );
        });

        return tableContent;
    }

    render() {
        return (
            <Table striped bordered hover>
                <tbody>
                    {this.getTableContent()}
                </tbody>
            </Table>
        )
    }
}