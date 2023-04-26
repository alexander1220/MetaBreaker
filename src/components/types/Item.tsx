import { Tag } from "components/types/enums/Tag";

export interface Item {
    name: string;
    id: number;
    tags: Tag[];
    blocking?: number[];
}
