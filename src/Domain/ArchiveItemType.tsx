export enum ArchiveItemType{
    newsletter,
    video,
    unknown
}

export function getArchiveItemType(key: string): ArchiveItemType {
    if (key === "newsletter") {
        return ArchiveItemType.newsletter;
    } else if (key === "video") {
        return ArchiveItemType.video;
    }

    return ArchiveItemType.unknown;
}
