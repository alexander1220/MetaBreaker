import Image from "next/image";

export enum ElementType {
    Champion = 'champion',
    Item = 'item',
    Lane = 'lane',
    Spell = 'spell',
    Rune = 'rune',
};

export enum TooltipPlacement {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
}

export enum HighlightType {
    None = 'transparent',
    Black = 'black',
    Gold = '#E4A51C',
    Light = '#B5B5B9',
}

export default function Element(
    { id, type, name, description, height, width, tooltipPlacement = TooltipPlacement.Bottom, highlight = HighlightType.None }: 
    { id: string, type: ElementType, name: string, description: string, height: number, width: number, tooltipPlacement?: TooltipPlacement, highlight?: HighlightType }) {
        let source : string;
        switch (type) {
            case ElementType.Lane:
                source = `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${name}-blue.png`;
                break;
            case ElementType.Rune:
                source = `https://raw.communitydragon.org/latest/game/assets/perks/styles/domination/${name}/${name}.png`;
                break;
            default:
                source = `https://ddragon.leagueoflegends.com/cdn/13.3.1/img/${type}/${name}.png`;
                break;
        }

    return (
        <div style={{
            display: "inline-block",
            margin: 1.5
        }} data-tooltip={description} data-placement={tooltipPlacement}>
            <Image id={id} alt={description} width={width} height={height} src={source} style={{border: 2, borderStyle: "solid", borderRadius: 5, borderColor: highlight}} />
        </div>
    );
}