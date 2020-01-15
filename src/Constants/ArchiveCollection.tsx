import { ArchiveItem } from "../Domain/ArchiveItem";
import { ArchiveItemType } from "../Domain/ArchiveItemType";
import newsletter1 from "../Assets/Newsletters/newsletter1.pdf";
import newsletter2 from "../Assets/Newsletters/newsletter2.pdf";
import newsletter3 from "../Assets/Newsletters/newsletter3.pdf";

export function getArchiveCollection(){
    let coll : ArchiveItem[] = [];

    // Add all previous published items to the coll and return
    coll.push(new ArchiveItem(newsletter3, ArchiveItemType.newsletter, "Nieuwsbrief oktober 2019"));
    coll.push(new ArchiveItem(newsletter2, ArchiveItemType.newsletter, "Nieuwsbrief juli 2019"));
    coll.push(new ArchiveItem(newsletter1, ArchiveItemType.newsletter, "Nieuwsbrief mei 2019"));

    return coll;
}

export function getArchiveCollection2() {
    let coll : ArchiveItem[] = [];
    // TODO CH parse ArchiveCollection.json
    // TODO CH return a collection of items
    return coll;
}
