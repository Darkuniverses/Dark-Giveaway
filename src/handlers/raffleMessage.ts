import Context from '@/models/Context'

export default async function handleCustomRaffleMessage(ctx: Context) {
  const sentMessage = await ctx.replyWithLocalization('custom_raffle_message')

  ctx.dbchat.raffleMessageSetupMessageId = sentMessage.message_id
  await ctx.dbchat.save()

  if (ctx.dbchat.raffleMessage) {
    await ctx.sendCopy(ctx.dbchat.raffleMessage)
  }
}
