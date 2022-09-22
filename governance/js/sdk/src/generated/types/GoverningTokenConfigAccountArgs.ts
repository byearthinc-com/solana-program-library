/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import {
  GoverningTokenType,
  governingTokenTypeBeet,
} from './GoverningTokenType'
export type GoverningTokenConfigAccountArgs = {
  voterWeightAddin: beet.COption<web3.PublicKey>
  maxVoterWeightAddin: beet.COption<web3.PublicKey>
  tokenType: GoverningTokenType
}

/**
 * @category userTypes
 * @category generated
 */
export const governingTokenConfigAccountArgsBeet =
  new beet.FixableBeetArgsStruct<GoverningTokenConfigAccountArgs>(
    [
      ['voterWeightAddin', beet.coption(beetSolana.publicKey)],
      ['maxVoterWeightAddin', beet.coption(beetSolana.publicKey)],
      ['tokenType', governingTokenTypeBeet],
    ],
    'GoverningTokenConfigAccountArgs'
  )
