/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import * as beet from '@metaplex-foundation/beet'
import {
  GovernanceAccountType,
  governanceAccountTypeBeet,
} from '../types/GovernanceAccountType'
import {
  GoverningTokenConfig,
  governingTokenConfigBeet,
} from '../types/GoverningTokenConfig'
import { Reserved110, reserved110Beet } from '../types/Reserved110'

/**
 * Arguments used to create {@link RealmConfigAccount}
 * @category Accounts
 * @category generated
 */
export type RealmConfigAccountArgs = {
  accountType: GovernanceAccountType
  realm: web3.PublicKey
  communityTokenConfig: GoverningTokenConfig
  councilTokenConfig: GoverningTokenConfig
  reserved: Reserved110
}
/**
 * Holds the data for the {@link RealmConfigAccount} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class RealmConfigAccount implements RealmConfigAccountArgs {
  private constructor(
    readonly accountType: GovernanceAccountType,
    readonly realm: web3.PublicKey,
    readonly communityTokenConfig: GoverningTokenConfig,
    readonly councilTokenConfig: GoverningTokenConfig,
    readonly reserved: Reserved110
  ) {}

  /**
   * Creates a {@link RealmConfigAccount} instance from the provided args.
   */
  static fromArgs(args: RealmConfigAccountArgs) {
    return new RealmConfigAccount(
      args.accountType,
      args.realm,
      args.communityTokenConfig,
      args.councilTokenConfig,
      args.reserved
    )
  }

  /**
   * Deserializes the {@link RealmConfigAccount} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [RealmConfigAccount, number] {
    return RealmConfigAccount.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link RealmConfigAccount} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<RealmConfigAccount> {
    const accountInfo = await connection.getAccountInfo(address)
    if (accountInfo == null) {
      throw new Error(`Unable to find RealmConfigAccount account at ${address}`)
    }
    return RealmConfigAccount.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'GovER5Lthms3bLBqWub97yVrMmEogzX7xNjdXpPPCVZw'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, realmConfigAccountBeet)
  }

  /**
   * Deserializes the {@link RealmConfigAccount} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [RealmConfigAccount, number] {
    return realmConfigAccountBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link RealmConfigAccount} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return realmConfigAccountBeet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link RealmConfigAccount} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: RealmConfigAccountArgs) {
    const instance = RealmConfigAccount.fromArgs(args)
    return realmConfigAccountBeet.toFixedFromValue(instance).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link RealmConfigAccount} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: RealmConfigAccountArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      RealmConfigAccount.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link RealmConfigAccount} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      accountType:
        'GovernanceAccountType.' + GovernanceAccountType[this.accountType],
      realm: this.realm.toBase58(),
      communityTokenConfig: this.communityTokenConfig,
      councilTokenConfig: this.councilTokenConfig,
      reserved: this.reserved,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const realmConfigAccountBeet = new beet.FixableBeetStruct<
  RealmConfigAccount,
  RealmConfigAccountArgs
>(
  [
    ['accountType', governanceAccountTypeBeet],
    ['realm', beetSolana.publicKey],
    ['communityTokenConfig', governingTokenConfigBeet],
    ['councilTokenConfig', governingTokenConfigBeet],
    ['reserved', reserved110Beet],
  ],
  RealmConfigAccount.fromArgs,
  'RealmConfigAccount'
)
