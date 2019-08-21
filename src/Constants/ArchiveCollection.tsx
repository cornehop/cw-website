import { ArchiveItem, ArchiveItemType } from "../Domain/ArchiveItem";
import newsletter1 from "../Assets/Newsletters/newsletter1.pdf";
import newsletter2 from "../Assets/Newsletters/newsletter2.pdf";

export function getArchiveCollection(){
    let coll : ArchiveItem[] = [];

    // Add all previous published items to the coll and return
    coll.push(new ArchiveItem(newsletter2, ArchiveItemType.newsletter, "Nieuwsbrief juli 2019"));
    coll.push(new ArchiveItem(newsletter1, ArchiveItemType.newsletter, "Nieuwsbrief mei 2019"));
    console.log(coll);
    return coll;
}