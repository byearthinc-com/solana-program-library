/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  GovernanceConfig,
  governanceConfigBeet,
} from '../types/GovernanceConfig'

/**
 * @category Instructions
 * @category CreateTokenGovernance
 * @category generated
 */
export type CreateTokenGovernanceInstructionArgs = {
  config: GovernanceConfig
  transferAccountAuthorities: boolean
}
/**
 * @category Instructions
 * @category CreateTokenGovernance
 * @category generated
 */
export const CreateTokenGovernanceStruct = new beet.FixableBeetArgsStruct<
  CreateTokenGovernanceInstructionArgs & {
    instructionDiscriminator: number
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['config', governanceConfigBeet],
    ['transferAccountAuthorities', beet.bool],
  ],
  'CreateTokenGovernanceInstructionArgs'
)
/**
 * Accounts required by the _CreateTokenGovernance_ instruction
 *
 * @property [] realmAccount Realm account the created Governance belongs to
 * @property [_writable_] tokenGovernanceAccount Token Governance account. seeds=['token-governance', realm, governed_token]
 * @property [_writable_] tokenAccount Token account governed by this Governance account
 * @property [**signer**] tokenAccountAuthority Current token account authority (AccountOwner and optionally CloseAccount
 * @property [] governingTokenOwnerRecord Governing TokenOwnerRecord account (Used only if not signed by RealmAuthority
 * @property [**signer**] payer
 * @property [**signer**] governanceAuthority
 * @property [] realmConfig seeds=['realm-config', realm]
 * @property [] voterWeightRecord (optional) Optional Voter Weight Record
 * @category Instructions
 * @category CreateTokenGovernance
 * @category generated
 */
export type CreateTokenGovernanceInstructionAccounts = {
  realmAccount: web3.PublicKey
  tokenGovernanceAccount: web3.PublicKey
  tokenAccount: web3.PublicKey
  tokenAccountAuthority: web3.PublicKey
  governingTokenOwnerRecord: web3.PublicKey
  payer: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  governanceAuthority: web3.PublicKey
  realmConfig: web3.PublicKey
  voterWeightRecord?: web3.PublicKey
}

export const createTokenGovernanceInstructionDiscriminator = 18

/**
 * Creates a _CreateTokenGovernance_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateTokenGovernance
 * @category generated
 */
export function createCreateTokenGovernanceInstruction(
  accounts: CreateTokenGovernanceInstructionAccounts,
  args: CreateTokenGovernanceInstructionArgs,
  programId = new web3.PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
) {
  const [data] = CreateTokenGovernanceStruct.serialize({
    instructionDiscriminator: createTokenGovernanceInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.realmAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenGovernanceAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccountAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.governingTokenOwnerRecord,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.governanceAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.realmConfig,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.voterWeightRecord != null) {
    keys.push({
      pubkey: accounts.voterWeightRecord,
      isWritable: false,
      isSigner: false,
    })
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
