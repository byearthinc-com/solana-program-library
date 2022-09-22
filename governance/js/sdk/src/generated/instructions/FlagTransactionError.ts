/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category FlagTransactionError
 * @category generated
 */
export const FlagTransactionErrorStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>(
  [['instructionDiscriminator', beet.u8]],
  'FlagTransactionErrorInstructionArgs'
)
/**
 * Accounts required by the _FlagTransactionError_ instruction
 *
 * @property [_writable_] proposalAccount
 * @property [] tokenOwnerRecord TokenOwnerRecord account of the Proposal owner
 * @property [**signer**] governanceAuthority Governance Authority (Token Owner or Governance Delegate)
 * @property [_writable_] proposalTransactionAccount ProposalTransaction account to flag
 * @category Instructions
 * @category FlagTransactionError
 * @category generated
 */
export type FlagTransactionErrorInstructionAccounts = {
  proposalAccount: web3.PublicKey
  tokenOwnerRecord: web3.PublicKey
  governanceAuthority: web3.PublicKey
  proposalTransactionAccount: web3.PublicKey
}

export const flagTransactionErrorInstructionDiscriminator = 20

/**
 * Creates a _FlagTransactionError_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category FlagTransactionError
 * @category generated
 */
export function createFlagTransactionErrorInstruction(
  accounts: FlagTransactionErrorInstructionAccounts,
  programId = new web3.PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
) {
  const [data] = FlagTransactionErrorStruct.serialize({
    instructionDiscriminator: flagTransactionErrorInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.proposalAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenOwnerRecord,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.governanceAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.proposalTransactionAccount,
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
