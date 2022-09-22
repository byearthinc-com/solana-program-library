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
  GovernanceAccountType,
  governanceAccountTypeBeet,
} from '../types/GovernanceAccountType'

/**
 * Arguments used to create {@link TokenOwnerRecordV2}
 * @category Accounts
 * @category generated
 */
export type TokenOwnerRecordV2Args = {
  accountType: GovernanceAccountType
  realm: web3.PublicKey
  governingTokenMint: web3.PublicKey
  governingTokenOwner: web3.PublicKey
  governingTokenDepositAmount: beet.bignum
  unrelinquishedVotesCount: number
  totalVotesCount: number
  outstandingProposalCount: number
  reserved: number[] /* size: 7 */
  governanceDelegate: beet.COption<web3.PublicKey>
  reservedV2: number[] /* size: 128 */
}
/**
 * Holds the data for the {@link TokenOwnerRecordV2} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class TokenOwnerRecordV2 implements TokenOwnerRecordV2Args {
  private constructor(
    readonly accountType: GovernanceAccountType,
    readonly realm: web3.PublicKey,
    readonly governingTokenMint: web3.PublicKey,
    readonly governingTokenOwner: web3.PublicKey,
    readonly governingTokenDepositAmount: beet.bignum,
    readonly unrelinquishedVotesCount: number,
    readonly totalVotesCount: number,
    readonly outstandingProposalCount: number,
    readonly reserved: number[] /* size: 7 */,
    readonly governanceDelegate: beet.COption<web3.PublicKey>,
    readonly reservedV2: number[] /* size: 128 */
  ) {}

  /**
   * Creates a {@link TokenOwnerRecordV2} instance from the provided args.
   */
  static fromArgs(args: TokenOwnerRecordV2Args) {
    return new TokenOwnerRecordV2(
      args.accountType,
      args.realm,
      args.governingTokenMint,
      args.governingTokenOwner,
      args.governingTokenDepositAmount,
      args.unrelinquishedVotesCount,
      args.totalVotesCount,
      args.outstandingProposalCount,
      args.reserved,
      args.governanceDelegate,
      args.reservedV2
    )
  }

  /**
   * Deserializes the {@link TokenOwnerRecordV2} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [TokenOwnerRecordV2, number] {
    return TokenOwnerRecordV2.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link TokenOwnerRecordV2} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<TokenOwnerRecordV2> {
    const accountInfo = await connection.getAccountInfo(address)
    if (accountInfo == null) {
      throw new Error(`Unable to find TokenOwnerRecordV2 account at ${address}`)
    }
    return TokenOwnerRecordV2.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, tokenOwnerRecordV2Beet)
  }

  /**
   * Deserializes the {@link TokenOwnerRecordV2} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [TokenOwnerRecordV2, number] {
    return tokenOwnerRecordV2Beet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link TokenOwnerRecordV2} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return tokenOwnerRecordV2Beet.serialize(this)
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link TokenOwnerRecordV2} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: TokenOwnerRecordV2Args) {
    const instance = TokenOwnerRecordV2.fromArgs(args)
    return tokenOwnerRecordV2Beet.toFixedFromValue(instance).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link TokenOwnerRecordV2} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: TokenOwnerRecordV2Args,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      TokenOwnerRecordV2.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link TokenOwnerRecordV2} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      accountType:
        'GovernanceAccountType.' + GovernanceAccountType[this.accountType],
      realm: this.realm.toBase58(),
      governingTokenMint: this.governingTokenMint.toBase58(),
      governingTokenOwner: this.governingTokenOwner.toBase58(),
      governingTokenDepositAmount: (() => {
        const x = <{ toNumber: () => number }>this.governingTokenDepositAmount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      unrelinquishedVotesCount: this.unrelinquishedVotesCount,
      totalVotesCount: this.totalVotesCount,
      outstandingProposalCount: this.outstandingProposalCount,
      reserved: this.reserved,
      governanceDelegate: this.governanceDelegate,
      reservedV2: this.reservedV2,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const tokenOwnerRecordV2Beet = new beet.FixableBeetStruct<
  TokenOwnerRecordV2,
  TokenOwnerRecordV2Args
>(
  [
    ['accountType', governanceAccountTypeBeet],
    ['realm', beetSolana.publicKey],
    ['governingTokenMint', beetSolana.publicKey],
    ['governingTokenOwner', beetSolana.publicKey],
    ['governingTokenDepositAmount', beet.u64],
    ['unrelinquishedVotesCount', beet.u32],
    ['totalVotesCount', beet.u32],
    ['outstandingProposalCount', beet.u8],
    ['reserved', beet.uniformFixedSizeArray(beet.u8, 7)],
    ['governanceDelegate', beet.coption(beetSolana.publicKey)],
    ['reservedV2', beet.uniformFixedSizeArray(beet.u8, 128)],
  ],
  TokenOwnerRecordV2.fromArgs,
  'TokenOwnerRecordV2'
)
