import {
  feedBackTime as feedBackTimeEvent,
  othersDeposite as othersDepositeEvent,
  selfDeposit as selfDepositEvent,
  selfWithdraw as selfWithdrawEvent,
  transferring as transferringEvent
} from "../generated/bankdppv2/bankdppv2"
import {
  feedBackTime,
  othersDeposite,
  selfDeposit,
  selfWithdraw,
  transferring
} from "../generated/schema"

export function handlefeedBackTime(event: feedBackTimeEvent): void {
  let entity = new feedBackTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.feedback = event.params.feedback

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleothersDeposite(event: othersDepositeEvent): void {
  let entity = new othersDeposite(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.depositee = event.params.depositee
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleselfDeposit(event: selfDepositEvent): void {
  let entity = new selfDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.depositor = event.params.depositor
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleselfWithdraw(event: selfWithdrawEvent): void {
  let entity = new selfWithdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.beneficiaries = event.params.beneficiaries
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handletransferring(event: transferringEvent): void {
  let entity = new transferring(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.from = event.params.from
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
