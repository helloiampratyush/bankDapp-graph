import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { feedBackTime } from "../generated/schema"
import { feedBackTime as feedBackTimeEvent } from "../generated/bankdppv2/bankdppv2"
import { handlefeedBackTime } from "../src/bankdppv-2"
import { createfeedBackTimeEvent } from "./bankdppv-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let provider = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let feedback = "Example string value"
    let newfeedBackTimeEvent = createfeedBackTimeEvent(provider, feedback)
    handlefeedBackTime(newfeedBackTimeEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("feedBackTime created and stored", () => {
    assert.entityCount("feedBackTime", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "feedBackTime",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "provider",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "feedBackTime",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "feedback",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
