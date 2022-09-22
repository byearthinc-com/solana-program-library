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
 * @category CancelProposal
 * @category generated
 */
export const CancelProposalStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'CancelProposalInstructionArgs')
/**
 * Accounts required by the _CancelProposal_ instruction
 *
 * @property [_writable_] realmAccount
 * @property [_writable_] governanceAccount
 * @property [_writable_] proposalAccount
 * @property [_writable_] tokenOwnerRecord TokenOwnerRecord account of the Proposal owner
 * @property [**signer**] governanceAuthority Governance authority (Token Owner or Governance Delegate)
 * @category Instructions
 * @category CancelProposal
 * @category generated
 */
export type CancelProposalInstructionAccounts = {
  realmAccount: web3.PublicKey
  governanceAccount: web3.PublicKey
  proposalAccount: web3.PublicKey
  tokenOwnerRecord: web3.PublicKey
  governanceAuthority: web3.PublicKey
}

export const cancelProposalInstructionDiscriminator = 11

/**
 * Creates a _CancelProposal_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CancelProposal
 * @category generated
 */
export function createCancelProposalInstruction(
  accounts: CancelProposalInstructionAccounts,
  programId = new web3.PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
) {
  const [data] = CancelProposalStruct.serialize({
    instructionDiscriminator: cancelProposalInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.realmAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.governanceAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenOwnerRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.governanceAuthority,
      isWritable: false,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
