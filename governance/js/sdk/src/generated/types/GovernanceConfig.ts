/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { VoteThreshold, voteThresholdBeet } from './VoteThreshold'
import { VoteTipping, voteTippingBeet } from './VoteTipping'
export type GovernanceConfig = {
  communityVoteThreshold: VoteThreshold
  minCommunityWeightToCreateProposal: beet.bignum
  minTransactionHoldUpTime: number
  maxVotingTime: number
  communityVoteTipping: VoteTipping
  councilVoteThreshold: VoteThreshold
  councilVetoVoteThreshold: VoteThreshold
  minCouncilWeightToCreateProposal: beet.bignum
  councilVoteTipping: VoteTipping
  communityVetoVoteThreshold: VoteThreshold
}

/**
 * @category userTypes
 * @category generated
 */
export const governanceConfigBeet =
  new beet.FixableBeetArgsStruct<GovernanceConfig>(
    [
      ['communityVoteThreshold', voteThresholdBeet],
      ['minCommunityWeightToCreateProposal', beet.u64],
      ['minTransactionHoldUpTime', beet.u32],
      ['maxVotingTime', beet.u32],
      ['communityVoteTipping', voteTippingBeet],
      ['councilVoteThreshold', voteThresholdBeet],
      ['councilVetoVoteThreshold', voteThresholdBeet],
      ['minCouncilWeightToCreateProposal', beet.u64],
      ['councilVoteTipping', voteTippingBeet],
      ['communityVetoVoteThreshold', voteThresholdBeet],
    ],
    'GovernanceConfig'
  )
