import { champions } from 'components/types/Champions';
import { ddragonUrl } from 'components/types/Constants';
import { Lane } from 'components/types/enums/Lane';
import { rollBuild } from 'components/utils/BuildRoller';
import { readRollingOptionsFromParams } from 'components/utils/RollingOptionsReader';
import { ImageResponse } from 'next/server';

const size = {
    width: 1200,
    height: 630,
}

export const runtime = 'edge' // 'nodejs' is the default

// Font
const rubikBold = fetch(
    new URL('./Rubik-Bold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());


const laneMappings = new Map([
    [Lane.Top, 'top'],
    [Lane.Jungle, 'jungle'],
    [Lane.Mid, 'middle'],
    [Lane.Adc, 'bottom'],
    [Lane.Support, 'utility'],
]);

// Image generation
export async function GET(request: Request, { params }: { params: { options: string[] } }) {
    let rollingOptions = readRollingOptionsFromParams(params);
    if (!rollingOptions)
        return new Response('Invalid options', { status: 400 });
    let rolledBuild = rollBuild(champions, rollingOptions);
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontFamily: '"Rubik", sans-serif',
                    fontSize: '60px',
                    background: '#1A202C',
                    color: 'rgba(255, 255, 255, 0.92)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <h1 style={{ lineHeight: '10px' }}>
                        {rolledBuild.champion.name}, {rolledBuild.tag}
                    </h1>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '1.875rem'
                    }}>
                        <img src={`${ddragonUrl}/champion/${rolledBuild.champion.normalizedName}.png`}
                            style={{
                                width: '160px',
                                height: '160px',
                            }} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.625rem'
                        }}>
                            <img
                                src={`${ddragonUrl}/item/${rolledBuild.starterItem.id}.png`}
                                alt={rolledBuild.starterItem.name}
                                style={{ width: '75px', height: '75x' }}
                                title={rolledBuild.starterItem.name}
                            />
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                                {rolledBuild.items.map((item, index) => (
                                    <img
                                        key={index}
                                        src={`${ddragonUrl}/item/${item?.id}.png`}
                                        alt={item?.name}
                                        style={{ width: '75px', height: '75px' }}
                                        title={item?.name}
                                    />
                                ))}
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.625rem'
                        }}>
                            <img
                                src={`${ddragonUrl}/spell/${rolledBuild.summonerSpells[1]?.fullName}.png`}
                                alt={rolledBuild.summonerSpells[1]?.name}
                                style={{ width: '75px', height: '75px' }}
                                title={rolledBuild.summonerSpells[1]?.name}
                            />
                            <img
                                src={`${ddragonUrl}/spell/${rolledBuild.summonerSpells[0]?.fullName}.png`}
                                alt={rolledBuild.summonerSpells[0]?.name}
                                style={{ width: '75px', height: '75px' }}
                                title={rolledBuild.summonerSpells[0]?.name}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.625rem' }}>
                            <img
                                src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledBuild.keystone.iconPath}.png`}
                                alt={rolledBuild.keystone.name}
                                style={{ width: '75px', height: '75px' }}
                                title={rolledBuild.keystone.name}
                            />
                            <img
                                src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/${rolledBuild.rune.iconFileName}.png`}
                                alt={rolledBuild.rune.name}
                                style={{ width: '37.5px', height: '37.5px' }}
                                title={rolledBuild.rune.name}
                            />
                        </div>
                        <img
                            src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-clash/global/default/assets/images/position-selector/positions/icon-position-${laneMappings.get(rolledBuild.lane)}-blue.png`}
                            alt={rolledBuild.lane}
                            style={{ width: '75px', height: '75px' }}
                            title={rolledBuild.lane}
                        />
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
            fonts: [
                {
                    name: 'Rubik',
                    style: 'normal',
                    data: await rubikBold,
                    weight: 700,
                },
            ],
        }
    )
}