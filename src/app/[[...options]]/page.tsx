import { Lane } from 'components/types/enums/Lane';
import ChampDrawer from 'components/ChampDrawer';
import RolledDisplay from 'components/RolledDisplay';
import RollSwitches from 'components/switches/roll-switches';
import CenterStackWrapper from 'components/MainPageCenterStackWrapper';
import { readRollingOptionsFromParams } from 'components/utils/RollingOptionsReader';


export async function generateMetadata({ params }: { params: any }) {

  let rollingOptions = readRollingOptionsFromParams(params);
  if (!rollingOptions)
    return {};

  return {
    openGraph: {
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: `/api/opengraph/${params?.options[0]}`
        }
      ]
    },
    twitter: {
      images: [
        {
          type: 'image/png',
          width: 1200,
          height: 630,
          url: `/api/opengraph/${params?.options[0]}`
        }
      ]
    }
  }
}

export default function Page({ params }: { params: any }) {

  let rollingOptions = readRollingOptionsFromParams(params);

  return (
    <CenterStackWrapper>
      <RolledDisplay rollingOptions={rollingOptions} />
      <RollSwitches />
      <ChampDrawer />
    </CenterStackWrapper>
  )
}
