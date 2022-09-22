/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * @category Instructions
 * @category SetGovernanceDelegate
 * @category generated
 */
export type SetGovernanceDelegateInstructionArgs = {
  newGovernanceDelegate: beet.COption<web3.PublicKey>
}
/**
 * @category Instructions
 * @category SetGovernanceDelegate
 * @category generated
 */
export const SetGovernanceDelegateStruct = new beet.FixableBeetArgsStruct<
  SetGovernanceDelegateInstructionArgs & {
    instructionDiscriminator: number
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['newGovernanceDelegate', beet.coption(beetSolana.publicKey)],
  ],
  'SetGovernanceDelegateInstructionArgs'
)
/**
 * Accounts required by the _SetGovernanceDelegate_ instruction
 *
 * @property [**signer**] governanceDelegate Current governance delegate or governing token owner
 * @property [_writable_] tokenOwnerRecord
 * @category Instructions
 * @category SetGovernanceDelegate
 * @category generated
 */
export type SetGovernanceDelegateInstructionAccounts = {
  governanceDelegate: web3.PublicKey
  tokenOwnerRecord: web3.PublicKey
}

export const setGovernanceDelegateInstructionDiscriminator = 3

/**
 * Creates a _SetGovernanceDelegate_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category SetGovernanceDelegate
 * @category generated
 */
export function createSetGovernanceDelegateInstruction(
  accounts: SetGovernanceDelegateInstructionAccounts,
  args: SetGovernanceDelegateInstructionArgs,
  programId = new web3.PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
) {
  const [data] = SetGovernanceDelegateStruct.serialize({
    instructionDiscriminator: setGovernanceDelegateInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.governanceDelegate,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenOwnerRecord,
      isWritable: true,
      isSigner: false,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
