export enum ArchiveItemType{
    newsletter,
    video
}

export class ArchiveItem{
    itemType: ArchiveItemType;
    date: Date;
    name: string;

    constructor(
        itemType: ArchiveItemType,
        date: Date,
        name: string
    ){
        this.itemType = itemType;
        this.date = date;
        this.name = name;
    }
}