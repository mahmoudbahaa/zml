import { MessageBuilder } from '../../../shared/message'
import { wrapperMessage } from '../../common/message'

const messageBuilder = new MessageBuilder()

export const messaging = wrapperMessage(messageBuilder)
