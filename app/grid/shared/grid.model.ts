import { Panel } from "./panel.model"

export class Episode {
    constructor(
        public id: string,
        public seriesId: string,
        public row: number,
        public columns: number,
        public name: string,
        public thumbnail: string,
        public panels: Array<Panel>
    ) {}
}