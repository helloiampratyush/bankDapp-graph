import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  feedBackTime,
  othersDeposite,
  selfDeposit,
  selfWithdraw,
  transferring
} from "../generated/bankdppv2/bankdppv2"

export function createfeedBackTimeEvent(
  provider: Address,
  feedback: string
): feedBackTime {
  let feedBackTimeEvent = changetype<feedBackTime>(newMockEvent())

  feedBackTimeEvent.parameters = new Array()

  feedBackTimeEvent.parameters.push(
    new ethereum.EventParam("provider", ethereum.Value.fromAddress(provider))
  )
  feedBackTimeEvent.parameters.push(
    new ethereum.EventParam("feedback", ethereum.Value.fromString(feedback))
  )

  return feedBackTimeEvent
}

export function createothersDepositeEvent(
  depositor: Address,
  depositee: Address,
  amount: BigInt
): othersDeposite {
  let othersDepositeEvent = changetype<othersDeposite>(newMockEvent())

  othersDepositeEvent.parameters = new Array()

  othersDepositeEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  othersDepositeEvent.parameters.push(
    new ethereum.EventParam("depositee", ethereum.Value.fromAddress(depositee))
  )
  othersDepositeEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return othersDepositeEvent
}

export function createselfDepositEvent(
  depositor: Address,
  amount: BigInt
): selfDeposit {
  let selfDepositEvent = changetype<selfDeposit>(newMockEvent())

  selfDepositEvent.parameters = new Array()

  selfDepositEvent.parameters.push(
    new ethereum.EventParam("depositor", ethereum.Value.fromAddress(depositor))
  )
  selfDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return selfDepositEvent
}

export function createselfWithdrawEvent(
  beneficiaries: Address,
  amount: BigInt
): selfWithdraw {
  let selfWithdrawEvent = changetype<selfWithdraw>(newMockEvent())

  selfWithdrawEvent.parameters = new Array()

  selfWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "beneficiaries",
      ethereum.Value.fromAddress(beneficiaries)
    )
  )
  selfWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return selfWithdrawEvent
}

export function createtransferringEvent(
  to: Address,
  from: Address,
  amount: BigInt
): transferring {
  let transferringEvent = changetype<transferring>(newMockEvent())

  transferringEvent.parameters = new Array()

  transferringEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferringEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferringEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferringEvent
}
