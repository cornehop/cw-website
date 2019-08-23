import { ArchiveItemType } from "./ArchiveItemType";

export class ArchiveItem{
    file: string;
    itemType: ArchiveItemType;
    name: string;

    constructor(
        file: string,
        itemType: ArchiveItemType,
        name: string
    ){
        this.file = file;
        this.itemType = itemType;
        this.name = name;
    }
}