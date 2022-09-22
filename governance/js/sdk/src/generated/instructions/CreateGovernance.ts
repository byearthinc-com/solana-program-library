/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  GovernanceConfig,
  governanceConfigBeet,
} from '../types/GovernanceConfig'

/**
 * @category Instructions
 * @category CreateGovernance
 * @category generated
 */
export type CreateGovernanceInstructionArgs = {
  config: GovernanceConfig
}
/**
 * @category Instructions
 * @category CreateGovernance
 * @category generated
 */
export const CreateGovernanceStruct = new beet.FixableBeetArgsStruct<
  CreateGovernanceInstructionArgs & {
    instructionDiscriminator: number
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['config', governanceConfigBeet],
  ],
  'CreateGovernanceInstructionArgs'
)
/**
  * Accounts required by the _CreateGovernance_ instruction
 *
  * @property [] governanceRealmAccount Realm account the created governance belongs to 
* @property [_writable_] governingAccount seeds=['account-governance', realm, governed_account] 
* @property [] governedAccount Account governed by this Governance (governing_account). 
        Note: the account doesn't have to exist and can be used only as a unique identified for the Governance account 
* @property [] governingTokenOwnerRecord Used only if not signed by RealmAuthority 
* @property [**signer**] payer  
* @property [**signer**] governanceAuthority  
* @property [] realmConfigAccount seeds=['realm-config', realm] 
* @property [] voterWeightRecord (optional) Optional Voter Weight Record  
  * @category Instructions
  * @category CreateGovernance
  * @category generated
  */
export type CreateGovernanceInstructionAccounts = {
  governanceRealmAccount: web3.PublicKey
  governingAccount: web3.PublicKey
  governedAccount: web3.PublicKey
  governingTokenOwnerRecord: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  governanceAuthority: web3.PublicKey
  realmConfigAccount: web3.PublicKey
  voterWeightRecord?: web3.PublicKey
}

export const createGovernanceInstructionDiscriminator = 4

/**
 * Creates a _CreateGovernance_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateGovernance
 * @category generated
 */
export function createCreateGovernanceInstruction(
  accounts: CreateGovernanceInstructionAccounts,
  args: CreateGovernanceInstructionArgs,
  programId = new web3.PublicKey('GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw')
) {
  const [data] = CreateGovernanceStruct.serialize({
    instructionDiscriminator: createGovernanceInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.governanceRealmAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.governingAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.governedAccount,
      isWritable: false,
      isSigner: false,
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
      pubkey: accounts.realmConfigAccount,
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
