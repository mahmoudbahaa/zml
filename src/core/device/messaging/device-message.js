import { getPackageInfo } from 'zeppos-cross-api/app'
import { MessageBuilder } from 'zeppos-cross-api/message'
import { log } from 'zeppos-cross-api/utils'
import { wrapperMessage } from '../../common/message.js'

const appDevicePort = 20
const appSidePort = 0

export function createDeviceMessage() {
  const messageBuilder = new MessageBuilder({
    appId: getPackageInfo().appId,
    appDevicePort,
    appSidePort,
  })

  return wrapperMessage(messageBuilder, log.getLogger('message-builder-device'))
}
