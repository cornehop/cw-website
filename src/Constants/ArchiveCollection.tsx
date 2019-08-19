import { ArchiveItem, ArchiveItemType } from "../Domain/ArchiveItem";

export function getArchiveCollection(){
    let coll : ArchiveItem[] = [];

    // Add all previous published items to the coll and return
    coll.push(new ArchiveItem(ArchiveItemType.newsletter, new Date(), "Nieuwsbrief #2"));
    coll.push(new ArchiveItem(ArchiveItemType.newsletter, new Date(), "Nieuwsbrief #1"));

    return coll;
}